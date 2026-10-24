import { AuditRequestPayload, GeoAuditReport, PromptAuditResult, EngineId, EngineResult } from '@/types/geo';
import { scrapeBrandMetadata } from './scraper';
import { generateAuditPrompts } from './prompts';
import { queryEngine } from './engines/realEngines';
import { analyzeAuditResults } from './analyzer';
import { getPresetBrand } from './mockData';

export async function runGeoAudit(payload: AuditRequestPayload): Promise<GeoAuditReport> {
  let brand = getPresetBrand(payload.url);
  
  if (!brand) {
    brand = await scrapeBrandMetadata(payload.url, payload.brandName);
  }

  // Override brand fields if supplied explicitly
  if (payload.brandName) brand.brandName = payload.brandName;
  if (payload.category) brand.category = payload.category;
  if (payload.competitors && payload.competitors.length > 0) {
    brand.competitors = payload.competitors;
  }

  const prompts = generateAuditPrompts(brand);
  const enginesToQuery: EngineId[] = ['perplexity', 'chatgpt', 'claude', 'gemini', 'deepseek'];

  const promptAudits: PromptAuditResult[] = [];

  for (const p of prompts) {
    const enginePromises = enginesToQuery.map(async (engId) => {
      const res = await queryEngine(engId, p.text, brand, payload.apiKeys);
      return { engId, res };
    });

    const engineResults = await Promise.all(enginePromises);
    const engineMap = {} as Record<EngineId, EngineResult>;

    let brandMentionCount = 0;
    engineResults.forEach(({ engId, res }) => {
      engineMap[engId] = res;
      if (res.mentionsBrand) brandMentionCount++;
    });

    promptAudits.push({
      promptId: p.id,
      promptText: p.text,
      category: p.category,
      engines: engineMap,
      brandMentionedCount: brandMentionCount,
      totalEngines: enginesToQuery.length,
      topCompetitorsNamed: brand.competitors.slice(0, 3),
    });
  }

  const executionMode = (payload.apiKeys?.openai || payload.apiKeys?.perplexity) ? 'live' : 'simulation';
  const report = analyzeAuditResults(brand, promptAudits, executionMode);
  return report;
}
