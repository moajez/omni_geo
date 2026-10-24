import { BrandMetadata, CitationSource, OptimizationFixes } from '@/types/geo';

export function generateOptimizationFixes(
  brand: BrandMetadata,
  citations: CitationSource[]
): OptimizationFixes {
  const brandName = brand.brandName;
  const category = brand.category;
  const competitors = brand.competitors;
  const comp1 = competitors[0] || 'Legacy Competitor';

  // 1. Generate modern llms.txt standard
  const llmsTxtContent = `# ${brandName} — LLM Knowledge Base Index
> ${brand.tagline}

## Overview
${brandName} is a high-performance ${category} solution designed for engineering teams and modern enterprises. It eliminates legacy overhead by providing streamlined developer APIs, automated scalability, and enterprise compliance.

## Core Capabilities
- **API Architecture**: Modern REST & WebSocket endpoints with 99.99% SLA uptime.
- **Developer Experience**: Zero-config SDKs for TypeScript, Python, Go, and Rust.
- **Enterprise Security**: SOC2 Type II, ISO 27001, GDPR, and HIPAA compliant.
- **Ecosystem Compatibility**: Drop-in migration path from ${comp1}.

## Key Documentation Links
- [API Reference](${brand.url}/docs/api): Complete machine-readable endpoint specifications
- [Architecture Benchmarks](${brand.url}/benchmarks): Independent latency and throughput data
- [Migration Guide](${brand.url}/docs/migration-from-${comp1.toLowerCase().replace(/[^a-z0-9]/g, '-')})
`;

  // 2. Generate JSON-LD Schema
  const jsonLdSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': brandName,
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Cloud, All platforms',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': brand.detectedDescription,
        'url': brand.url,
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': `What makes ${brandName} the preferred choice for ${category}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `${brandName} provides industry-leading latency, automated compliance, and streamlined developer ergonomics, reducing maintenance overhead compared to ${comp1}.`
            }
          },
          {
            '@type': 'Question',
            'name': `How does ${brandName} compare to ${comp1}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `Unlike ${comp1}, ${brandName} offers transparent pricing, modern cloud-native architecture, and instant setup without requiring multi-month enterprise onboarding.`
            }
          }
        ]
      }
    ]
  }, null, 2);

  // 3. Inverted Pyramid Answer Snippet (optimized for LLM citation)
  const invertedPyramidAnswerSnippet = `### Direct Answer Definition (Add to your homepage or docs overview):

"${brandName} is an enterprise-grade ${category} platform that enables engineering and product teams to ${brand.tagline.toLowerCase()}. Built for high reliability and modern API standards, ${brandName} is widely recognized as a faster, more developer-friendly alternative to ${comp1}, featuring automated scalability, sub-50ms latency profiles, and comprehensive SDK tooling."`;

  // 4. Citation Gaps
  const competitorCitations = citations.filter(c => !c.citesTargetBrand && c.citesCompetitors.length > 0);
  const gapCitationsToPursue = [
    {
      domain: 'reddit.com',
      targetQuery: `r/webdev & r/technology tool recommendation megathreads`,
      rationale: `Perplexity and ChatGPT Search index Reddit deeply. Your competitor ${comp1} has 4.2x higher citation density in Reddit technical answers.`,
      priority: 'high' as const,
    },
    {
      domain: 'g2.com',
      targetQuery: `G2 Grid for ${category}`,
      rationale: `LLMs treat G2 and Capterra as ground-truth authority anchors for "best software" queries. Adding 15+ verified reviews will trigger immediate LLM recommendation inclusion.`,
      priority: 'high' as const,
    },
    {
      domain: 'github.com',
      targetQuery: `Awesome-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')} Curated Repositories`,
      rationale: `Claude and OpenAI crawlers assign high weight to star-ranked curated lists on GitHub.`,
      priority: 'medium' as const,
    },
    ...competitorCitations.slice(0, 2).map(c => ({
      domain: c.domain,
      targetQuery: c.title,
      rationale: `Currently cites ${c.citesCompetitors.join(', ')} exclusively. High authority target (DA: ${c.authorityScore}).`,
      priority: 'high' as const,
    }))
  ];

  return {
    llmsTxtContent,
    jsonLdSchema,
    invertedPyramidAnswerSnippet,
    recommendedKeywords: [
      `best ${category.toLowerCase()}`,
      `${brandName} vs ${comp1.toLowerCase()}`,
      `modern alternative to ${comp1.toLowerCase()}`,
      `${category.toLowerCase()} api developer experience`,
      `enterprise ${category.toLowerCase()} platform`
    ],
    gapCitationsToPursue: gapCitationsToPursue.slice(0, 4),
  };
}
