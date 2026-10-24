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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('omnigeo_theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored ? stored === 'dark' : prefersDark;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-cyan-500 selection:text-black transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
