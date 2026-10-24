export type EngineId = 'chatgpt' | 'perplexity' | 'claude' | 'gemini' | 'deepseek';

export type SentimentType = 'champion' | 'recommended' | 'alternative' | 'neutral' | 'negative' | 'absent';

export interface CitationSource {
  domain: string;
  url: string;
  title: string;
  snippet?: string;
  sourceType: 'reddit' | 'wikipedia' | 'g2_review' | 'news_pr' | 'official_doc' | 'github' | 'blog';
  authorityScore: number; // 0-100
  citesTargetBrand: boolean;
  citesCompetitors: string[];
}

export interface EngineResult {
  engineId: EngineId;
  engineName: string;
  model: string;
  status: 'completed' | 'failed';
  mentionsBrand: boolean;
  mentionRank: number | null; // 1 = first brand mentioned, 2 = second, etc.
  sentiment: SentimentType;
  rawResponse: string;
  keyPhrases: string[];
  citations: CitationSource[];
  latencyMs: number;
}

export interface PromptAuditResult {
  promptId: string;
  promptText: string;
  category: 'direct_intent' | 'competitor_comparison' | 'industry_ranking' | 'technical_solution' | 'alternative_search';
  engines: Record<EngineId, EngineResult>;
  brandMentionedCount: number;
  totalEngines: number;
  topCompetitorsNamed: string[];
}

export interface CompetitorShareOfVoice {
  name: string;
  mentionCount: number;
  sharePercentage: number; // 0 - 100
  sentimentSummary: string;
}

export interface CitabilityAnalysis {
  informationDensityScore: number; // 0-100
  schemaMarkupDetected: boolean;
  schemaTypes: string[];
  directAnswerReadability: number; // 0-100
  statisticsPresence: boolean;
  citationAttributionRisk: 'low' | 'moderate' | 'high';
  critiques: string[];
}

export interface OptimizationFixes {
  llmsTxtContent: string;
  jsonLdSchema: string;
  invertedPyramidAnswerSnippet: string;
  recommendedKeywords: string[];
  gapCitationsToPursue: {
    domain: string;
    targetQuery: string;
    rationale: string;
    priority: 'high' | 'medium';
  }[];
}

export interface BrandMetadata {
  brandName: string;
  url: string;
  tagline: string;
  category: string;
  competitors: string[];
  detectedDescription: string;
}

export interface GeoAuditReport {
  id: string;
  timestamp: string;
  brand: BrandMetadata;
  overallScore: number; // 0-100
  metrics: {
    visibilityScore: number; // 0-100
    shareOfVoice: number; // 0-100
    sentimentIndex: number; // 0-100
    citabilityIndex: number; // 0-100
    authorityCitationRate: number; // 0-100
  };
  promptAudits: PromptAuditResult[];
  competitorSOV: CompetitorShareOfVoice[];
  citations: CitationSource[];
  citability: CitabilityAnalysis;
  fixes: OptimizationFixes;
  executionMode: 'live' | 'simulation';
}

export interface AuditRequestPayload {
  url: string;
  brandName?: string;
  category?: string;
  competitors?: string[];
  useLiveApis?: boolean;
  apiKeys?: {
    openai?: string;
    perplexity?: string;
    anthropic?: string;
    gemini?: string;
  };
}
