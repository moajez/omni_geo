import { BrandMetadata } from '@/types/geo';

export interface PresetBrand {
  id: string;
  name: string;
  url: string;
  category: string;
  tagline: string;
  competitors: string[];
}

export const PRESET_BRANDS: PresetBrand[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    url: 'https://stripe.com',
    category: 'Payment Infrastructure & Billing',
    tagline: 'Financial infrastructure for the internet',
    competitors: ['Paddle', 'Adyen', 'Lemon Squeezy', 'Braintree'],
  },
  {
    id: 'supabase',
    name: 'Supabase',
    url: 'https://supabase.com',
    category: 'Open Source Database & Backend',
    tagline: 'The Open Source Firebase Alternative',
    competitors: ['Firebase', 'Neon', 'PlanetScale', 'AWS RDS'],
  },
  {
    id: 'linear',
    name: 'Linear',
    url: 'https://linear.app',
    category: 'Software Project & Issue Tracking',
    tagline: 'The issue tracker you will actually enjoy using',
    competitors: ['Jira', 'Asana', 'GitHub Issues', 'Monday'],
  },
  {
    id: 'resend',
    name: 'Resend',
    url: 'https://resend.com',
    category: 'Developer Email API & Infrastructure',
    tagline: 'Email for developers. Built with React and TypeScript.',
    competitors: ['SendGrid', 'Postmark', 'Mailgun', 'Brevo'],
  },
  {
    id: 'posthog',
    name: 'PostHog',
    url: 'https://posthog.com',
    category: 'Product Analytics & Feature Flags',
    tagline: 'The single platform for product analytics, session replay, and feature flags',
    competitors: ['Mixpanel', 'Amplitude', 'LaunchDarkly', 'FullStory'],
  },
];

export function getPresetBrand(id: string): BrandMetadata | null {
  const match = PRESET_BRANDS.find(b => b.id.toLowerCase() === id.toLowerCase() || b.name.toLowerCase() === id.toLowerCase());
  if (!match) return null;
  return {
    brandName: match.name,
    url: match.url,
    category: match.category,
    tagline: match.tagline,
    competitors: match.competitors,
    detectedDescription: `${match.name} provides ${match.tagline.toLowerCase()} for global software teams.`,
  };
}
