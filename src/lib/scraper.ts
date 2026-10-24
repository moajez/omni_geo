import { BrandMetadata } from '@/types/geo';

export async function scrapeBrandMetadata(targetUrl: string, brandHint?: string): Promise<BrandMetadata> {
  let cleanUrl = targetUrl.trim();
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `https://${cleanUrl}`;
  }

  let html = '';
  let domain = '';
  try {
    const parsed = new URL(cleanUrl);
    domain = parsed.hostname.replace(/^www\./, '');
  } catch {
    domain = cleanUrl.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
  }

  // Fallback / default values based on domain
  const rawBrandName = brandHint || domain.split('.')[0] || 'Brand';
  const capitalizedBrand = rawBrandName.charAt(0).toUpperCase() + rawBrandName.slice(1);

  let title = '';
  let description = '';
  let detectedCategory = 'Developer Tools & SaaS';
  const defaultCompetitors: string[] = [];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(cleanUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 OmniGEO/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });
    clearTimeout(timeout);

    if (res.ok) {
      html = await res.text();

      // Extract Title
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch) {
        title = titleMatch[1].trim();
      }

      // Extract Meta Description
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                        html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i) ||
                        html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
      if (descMatch) {
        description = descMatch[1].trim();
      }

      // Detect common categories from HTML content
      const lowerHtml = html.toLowerCase();
      if (lowerHtml.includes('payment') || lowerHtml.includes('checkout') || lowerHtml.includes('billing')) {
        detectedCategory = 'Fintech & Payment Infrastructure';
        defaultCompetitors.push('Stripe', 'Paddle', 'Adyen', 'Lemon Squeezy');
      } else if (lowerHtml.includes('database') || lowerHtml.includes('postgres') || lowerHtml.includes('backend')) {
        detectedCategory = 'Database & Backend Infrastructure';
        defaultCompetitors.push('Supabase', 'Neon', 'PlanetScale', 'Firebase');
      } else if (lowerHtml.includes('project management') || lowerHtml.includes('issue tracking') || lowerHtml.includes('sprint')) {
        detectedCategory = 'Productivity & Issue Tracking';
        defaultCompetitors.push('Linear', 'Jira', 'Asana', 'Notion');
      } else if (lowerHtml.includes('analytics') || lowerHtml.includes('tracking') || lowerHtml.includes('metrics')) {
        detectedCategory = 'Product & Web Analytics';
        defaultCompetitors.push('PostHog', 'Mixpanel', 'Amplitude', 'Google Analytics');
      } else if (lowerHtml.includes('email') || lowerHtml.includes('transactional email') || lowerHtml.includes('newsletter')) {
        detectedCategory = 'Email API & Marketing';
        defaultCompetitors.push('Resend', 'SendGrid', 'Postmark', 'Brevo');
      } else if (lowerHtml.includes('ai') || lowerHtml.includes('agent') || lowerHtml.includes('llm')) {
        detectedCategory = 'AI & LLM Developer Platforms';
        defaultCompetitors.push('OpenAI', 'Anthropic', 'LangChain', 'Perplexity');
      }
    }
  } catch {
    // Graceful offline fallback if fetch fails or network blocked
  }

  if (!description) {
    description = title ? `${title}. Modern enterprise solutions for ${detectedCategory.toLowerCase()}.` : `${capitalizedBrand} is a leading platform in the ${detectedCategory} category.`;
  }

  // Filter out the target brand from default competitors
  const filteredCompetitors = (defaultCompetitors.length > 0 
    ? defaultCompetitors 
    : ['Competitor Alpha', 'Competitor Beta', 'Competitor Gamma']
  ).filter(c => c.toLowerCase() !== capitalizedBrand.toLowerCase());

  return {
    brandName: capitalizedBrand,
    url: cleanUrl,
    tagline: title || `${capitalizedBrand} — Next-Generation Platform`,
    category: detectedCategory,
    competitors: filteredCompetitors.slice(0, 4),
    detectedDescription: description,
  };
}
