import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OmniGEO — Open-Source Generative Engine & Answer Engine Optimization (GEO/AEO) Platform',
  description: 'Audit and optimize brand visibility across ChatGPT, Perplexity, Claude, Gemini & Google AI Overviews. Track citations, share-of-voice, and generate llms.txt & schema.',
  keywords: [
    'GEO',
    'AEO',
    'Generative Engine Optimization',
    'Answer Engine Optimization',
    'AI SEO',
    'Brand Visibility',
    'Perplexity Citations',
    'ChatGPT Brand Tracker',
    'llms.txt',
    'MCP Server'
  ],
  authors: [{ name: 'OmniGEO Contributors' }],
  openGraph: {
    title: 'OmniGEO — Open-Source Generative Engine Optimization Suite',
    description: 'Track brand visibility, citations, and competitor share-of-voice across ChatGPT, Perplexity, Claude, and Gemini.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-cyan-500 selection:text-black transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
