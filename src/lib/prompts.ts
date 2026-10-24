import { BrandMetadata, PromptAuditResult } from '@/types/geo';

export interface PromptTemplate {
  id: string;
  category: PromptAuditResult['category'];
  template: (brand: string, category: string, primaryCompetitor: string) => string;
}

export const AUDIT_PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'p1_buyer_intent',
    category: 'direct_intent',
    template: (_brand, category) => 
      `What are the top 3 best ${category} platforms for fast-growing companies and why?`,
  },
  {
    id: 'p2_competitor_alt',
    category: 'alternative_search',
    template: (_brand, category, competitor) => 
      `What are the best modern alternatives to ${competitor || 'legacy tools'} for ${category}?`,
  },
  {
    id: 'p3_brand_comparison',
    category: 'competitor_comparison',
    template: (brand, _category, competitor) => 
      `Compare ${brand} vs ${competitor || 'industry leaders'}. Which one should I choose for reliability, API developer experience, and pricing?`,
  },
  {
    id: 'p4_technical_solution',
    category: 'technical_solution',
    template: (_brand, category) => 
      `How can engineering teams optimize their architecture using modern ${category} solutions? Name the industry standard tools.`,
  },
  {
    id: 'p5_industry_ranking',
    category: 'industry_ranking',
    template: (_brand, category) => 
      `Who are the undisputed market leaders in ${category} in 2026? Provide a ranked breakdown with pros and cons.`,
  },
];

export function generateAuditPrompts(brand: BrandMetadata): { id: string; text: string; category: PromptAuditResult['category'] }[] {
  const primaryCompetitor = brand.competitors[0] || 'MarketLeader';
  return AUDIT_PROMPT_TEMPLATES.map(pt => ({
    id: pt.id,
    category: pt.category,
    text: pt.template(brand.brandName, brand.category, primaryCompetitor),
  }));
}
