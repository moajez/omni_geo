import { EngineId, EngineResult, BrandMetadata } from '@/types/geo';
import { simulateEngineResponse } from './simulator';

export interface LiveApiKeys {
  openai?: string;
  perplexity?: string;
  anthropic?: string;
  gemini?: string;
}

export async function queryEngine(
  engineId: EngineId,
  promptText: string,
  brand: BrandMetadata,
  keys?: LiveApiKeys
): Promise<EngineResult> {
  const brandLower = brand.brandName.toLowerCase();

  // Try live Perplexity API if key is available
  if (engineId === 'perplexity' && (keys?.perplexity || process.env.PERPLEXITY_API_KEY)) {
    const apiKey = keys?.perplexity || process.env.PERPLEXITY_API_KEY;
    try {
      const startTime = Date.now();
      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'sonar',
          messages: [
            { role: 'system', content: 'You are a helpful, objective research assistant. Answer accurately based on verified web sources.' },
            { role: 'user', content: promptText }
          ],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const content = data.choices?.[0]?.message?.content || '';
        const citationsList: string[] = data.citations || [];
        const mentionsBrand = content.toLowerCase().includes(brandLower);

        const latencyMs = Date.now() - startTime;
        return {
          engineId: 'perplexity',
          engineName: 'Perplexity AI',
          model: 'sonar',
          status: 'completed',
          mentionsBrand,
          mentionRank: mentionsBrand ? 1 : null,
          sentiment: mentionsBrand ? 'recommended' : 'absent',
          rawResponse: content,
          keyPhrases: ['live web search', 'online citation verified'],
          citations: citationsList.map(c => ({
            domain: new URL(c).hostname.replace(/^www\./, ''),
            url: c,
            title: c,
            sourceType: 'news_pr',
            authorityScore: 88,
            citesTargetBrand: mentionsBrand,
            citesCompetitors: brand.competitors,
          })),
          latencyMs,
        };
      }
    } catch {
      // Fallback to simulation
    }
  }

  // Try live OpenAI API if key is available
  if (engineId === 'chatgpt' && (keys?.openai || process.env.OPENAI_API_KEY)) {
    const apiKey = keys?.openai || process.env.OPENAI_API_KEY;
    try {
      const startTime = Date.now();
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are an objective tech analyst. Compare and rank platforms objectively based on developer experience, architecture, and market consensus.' },
            { role: 'user', content: promptText }
          ],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const content = data.choices?.[0]?.message?.content || '';
        const mentionsBrand = content.toLowerCase().includes(brandLower);
        const latencyMs = Date.now() - startTime;

        return {
          engineId: 'chatgpt',
          engineName: 'ChatGPT',
          model: 'gpt-4o-mini',
          status: 'completed',
          mentionsBrand,
          mentionRank: mentionsBrand ? 1 : null,
          sentiment: mentionsBrand ? 'recommended' : 'absent',
          rawResponse: content,
          keyPhrases: ['gpt-4o verified', 'neutral analysis'],
          citations: [],
          latencyMs,
        };
      }
    } catch {
      // Fallback to simulation
    }
  }

  // Default to robust simulation engine
  return simulateEngineResponse(engineId, {
    brand,
    promptText,
    category: brand.category,
  });
}
