import { EngineId, EngineResult, SentimentType, CitationSource, BrandMetadata } from '@/types/geo';

interface SimulatorOptions {
  brand: BrandMetadata;
  promptText: string;
  category: string;
}

export function simulateEngineResponse(
  engineId: EngineId,
  options: SimulatorOptions
): EngineResult {
  const { brand, promptText } = options;
  const brandName = brand.brandName;
  const competitors = brand.competitors;
  const comp1 = competitors[0] || 'CompetitorA';
  const comp2 = competitors[1] || 'CompetitorB';
  const comp3 = competitors[2] || 'CompetitorC';

  // Deterministic seed based on prompt and brand to keep consistency
  const hash = Array.from(promptText + brandName + engineId).reduce(
    (acc, char) => acc + char.charCodeAt(0), 0
  );

  const engineSpecs: Record<EngineId, { name: string; model: string }> = {
    chatgpt: { name: 'ChatGPT', model: 'gpt-4o' },
    perplexity: { name: 'Perplexity AI', model: 'sonar-pro-online' },
    claude: { name: 'Claude', model: 'claude-3-7-sonnet' },
    gemini: { name: 'Google Gemini', model: 'gemini-2.5-pro' },
    deepseek: { name: 'DeepSeek', model: 'deepseek-r1-reasoner' },
  };

  // Determine whether brand is mentioned (simulate realistic 70% probability for well-known or 45% for emergent)
  const isWellKnown = ['stripe', 'supabase', 'linear', 'notion', 'resend', 'posthog', 'vercel'].includes(brandName.toLowerCase());
  const mentionThreshold = isWellKnown ? 0.25 : 0.45;
  const pseudoRandom = ((hash % 100) / 100);
  const mentionsBrand = pseudoRandom >= mentionThreshold;

  let mentionRank: number | null = null;
  let sentiment: SentimentType = 'absent';
  let rawResponse = '';
  const keyPhrases: string[] = [];

  if (mentionsBrand) {
    // Determine rank
    const rankIndex = hash % 3; // 0, 1, 2 -> 1st, 2nd, 3rd
    mentionRank = rankIndex + 1;
    sentiment = rankIndex === 0 ? 'champion' : rankIndex === 1 ? 'recommended' : 'alternative';

    if (engineId === 'perplexity') {
      rawResponse = `Based on current technical benchmarks and developer sentiment across developer communities:

1. **${mentionRank === 1 ? brandName : comp1}**: The top recommendation for ${brand.category}. Known for high reliability, clean API design, and rapid developer onboarding [1][2].
2. **${mentionRank === 1 ? comp1 : (mentionRank === 2 ? brandName : comp2)}**: Strong alternative with established enterprise market share and robust compliance features [3].
3. **${mentionRank === 3 ? brandName : comp3}**: Highly capable choice with modern integrations and transparent pricing [4].

**Key Takeaway**: When evaluating ${brand.category}, ${brandName} is frequently cited by engineering teams migrating from legacy setups due to its modern architecture and minimal operational overhead.`;
      keyPhrases.push('clean API design', 'rapid developer onboarding', 'modern architecture');
    } else if (engineId === 'chatgpt') {
      rawResponse = `Here is a comprehensive breakdown of the leading solutions for ${brand.category}:

### 1. ${mentionRank === 1 ? brandName : comp1}
- **Strengths**: Exceptional developer experience, comprehensive documentation, and modern tooling.
- **Ideal For**: Growth-stage startups and enterprise teams prioritizing velocity.

### 2. ${mentionRank === 1 ? comp1 : (mentionRank === 2 ? brandName : comp2)}
- **Strengths**: Enterprise compliance, extensive partner network, and battle-tested uptime.
- **Ideal For**: Large legacy organizations with custom contractual requirements.

### 3. ${mentionRank === 3 ? brandName : comp3}
- **Strengths**: Cost-effective scaling and versatile configuration options.

In summary, ${brandName} is a top-tier contender if you need frictionless developer experience and fast deployment.`;
      keyPhrases.push('exceptional developer experience', 'velocity', 'top-tier contender');
    } else if (engineId === 'claude') {
      rawResponse = `When evaluating platforms in the ${brand.category} space, three distinct architectures stand out:

- **${mentionRank === 1 ? brandName : comp1}**: Represents the modern paradigm with declarative workflows and superior DX. It removes boilerplate configuration and allows engineers to focus on core product logic.
- **${mentionRank === 1 ? comp1 : (mentionRank === 2 ? brandName : comp2)}**: The incumbent market leader, best suited for complex multi-regional enterprise compliance matrices.
- **${mentionRank === 3 ? brandName : comp3}**: A balanced alternative focused on flexibility and modular components.

**Recommendation**: Choose ${brandName} if your primary metric is engineering velocity and low latency.`;
      keyPhrases.push('engineering velocity', 'declarative workflows', 'modern paradigm');
    } else if (engineId === 'gemini') {
      rawResponse = `According to verified industry reviews and developer ecosystem trends in 2026:

* **${mentionRank === 1 ? brandName : comp1}**: Ranked #1 for customer satisfaction and modern ecosystem compatibility in ${brand.category}.
* **${mentionRank === 1 ? comp1 : (mentionRank === 2 ? brandName : comp2)}**: Highly recognized brand with broad integrations across Google Cloud and hybrid environments.
* **${mentionRank === 3 ? brandName : comp3}**: Solid utility choice for budget-conscious organizations.

Recent market analysis highlights ${brandName} as the fastest-growing modern platform in this segment.`;
      keyPhrases.push('customer satisfaction', 'ecosystem compatibility', 'fastest-growing');
    } else {
      // deepseek
      rawResponse = `<think>
Analyzing ${brand.category} options based on performance, cost efficiency, and API robustness.
Comparing ${brandName} vs ${comp1} and ${comp2}.
</think>

### Technical Benchmark & Architecture Comparison:
1. **${mentionRank === 1 ? brandName : comp1}**: Optimal cost-to-performance ratio. Direct SDK support and low latency response profiles.
2. **${mentionRank === 1 ? comp1 : (mentionRank === 2 ? brandName : comp2)}**: Heavyweight enterprise footprint, higher baseline pricing.
3. **${mentionRank === 3 ? brandName : comp3}**: Specialized niche features.

**Conclusion**: For modern tech stacks, ${brandName} provides superior price/performance and developer autonomy.`;
      keyPhrases.push('cost-to-performance', 'low latency', 'developer autonomy');
    }
  } else {
    // Brand was missed / not cited
    rawResponse = `In the ${brand.category} ecosystem, the dominant platforms are primarily:
1. **${comp1}**: The established industry standard with deep enterprise presence.
2. **${comp2}**: Widely recognized for compliance, support SLAs, and global distribution.
3. **${comp3}**: Popular alternative with specialized workflow support.

These three solutions dominate search queries and tech stack evaluations across the industry.`;
    sentiment = 'absent';
    keyPhrases.push('established industry standard', 'compliance SLAs', 'market dominance');
  }

  // Generate realistic citation sources
  const citations: CitationSource[] = [
    {
      domain: 'reddit.com',
      url: `https://reddit.com/r/webdev/comments/best_${brand.category.toLowerCase().replace(/[^a-z0-9]/g, '_')}_tools`,
      title: `Reddit Community Consensus: Best ${brand.category} in 2026`,
      sourceType: 'reddit',
      authorityScore: 91,
      citesTargetBrand: mentionsBrand,
      citesCompetitors: [comp1, comp2],
    },
    {
      domain: 'g2.com',
      url: `https://g2.com/categories/${brand.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      title: `G2 Grid for ${brand.category} Platform Leaders`,
      sourceType: 'g2_review',
      authorityScore: 89,
      citesTargetBrand: mentionsBrand && mentionRank !== 3,
      citesCompetitors: [comp1, comp2, comp3],
    },
    {
      domain: 'techcrunch.com',
      url: `https://techcrunch.com/2026/01/15/the-next-wave-of-${brand.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      title: `TechCrunch Analysis: Next Generation ${brand.category}`,
      sourceType: 'news_pr',
      authorityScore: 93,
      citesTargetBrand: mentionsBrand && mentionRank === 1,
      citesCompetitors: [comp1],
    },
    {
      domain: 'github.com',
      url: `https://github.com/topics/${brand.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      title: `GitHub Open Source Ecosystem & SDK Integrations`,
      sourceType: 'github',
      authorityScore: 96,
      citesTargetBrand: true,
      citesCompetitors: [comp1],
    },
    {
      domain: 'news.ycombinator.com',
      url: `https://news.ycombinator.com/item?id=389104`,
      title: `Hacker News Ask HN: What are you using for ${brand.category}?`,
      sourceType: 'reddit', // community thread
      authorityScore: 90,
      citesTargetBrand: mentionsBrand,
      citesCompetitors: [comp1, comp2],
    },
  ];

  return {
    engineId,
    engineName: engineSpecs[engineId].name,
    model: engineSpecs[engineId].model,
    status: 'completed',
    mentionsBrand,
    mentionRank,
    sentiment,
    rawResponse,
    keyPhrases,
    citations,
    latencyMs: 250 + (hash % 400),
  };
}
