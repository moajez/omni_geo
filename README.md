<div align="center">

# ⚡ OmniGEO — Open Source Generative Engine & Answer Engine Optimization (GEO/AEO) Platform

**See what AI answer engines actually say about your brand. Track visibility, citations, and share-of-voice across ChatGPT, Perplexity, Claude, Gemini & DeepSeek.**

[![GitHub stars](https://img.shields.io/github/stars/moajez/omnigeo?style=for-the-badge&logo=github&color=06b6d4)](https://github.com/moajez/omnigeo)
[![GitHub license](https://img.shields.io/github/license/moajez/omnigeo?style=for-the-badge)](https://github.com/moajez/omnigeo/blob/main/LICENSE)
[![GitHub topic](https://img.shields.io/badge/topic-brand--visibility-blue?style=for-the-badge&logo=github)](https://github.com/topics/brand-visibility)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-Compatible-8b5cf6?style=for-the-badge)](https://modelcontextprotocol.io/)

[**Live Interactive Demo**](#quick-start) • [**CLI Tool**](#cli-usage) • [**MCP Server**](#model-context-protocol-mcp) • [**How It Compares**](#how-it-compares) • [**Features**](#core-capabilities)

</div>

---

## 💡 Why OmniGEO?

Traditional SEO is dying. Over **60% of searches now end in zero clicks** because users ask ChatGPT, Perplexity, Claude, or Google AI Overviews directly.

Existing AI brand monitoring tools (Profound, Peec AI, Athena, Otterly) charge **\$500 to \$2,500/month**. 

**OmniGEO is 100% free, open-source, and self-hostable.** It queries 5 major LLMs simultaneously, inspects raw model responses, reverse-engineers citations, benchmarks competitor Share of Voice (SOV), and generates instant `llms.txt` and schema fixes.

```
   ____                   _  ____ ______ ____  
  / __ \____ ___  ____   (_)/ ____/ ____/ __ \ 
 / / / / __ `__ \/ __ \ / // / __/ __/ / / / / 
/ /_/ / / / / / / / / // // /_/ / /___/ /_/ /  
\____/_/ /_/ /_/_/ /_//_/ \____/_____/\____/   
Open Source Generative Engine & Answer Engine Optimization (GEO/AEO)
```

---

## 🎯 Core Capabilities

- 🤖 **Multi-Engine Consensus**: Queries or simulates 5 premier AI answer engines side-by-side:
  - **Perplexity AI** (`sonar-pro` with live web search citations)
  - **ChatGPT / OpenAI** (`gpt-4o`)
  - **Anthropic Claude** (`claude-3-7-sonnet`)
  - **Google Gemini** (`gemini-2.5-pro`)
  - **DeepSeek** (`deepseek-r1`)
- 📊 **Answer Engine Share of Voice (SOV %)**: Measures your brand's recommendation frequency vs competitors across high-intent queries.
- 🌐 **Citation Attribution Graph**: Identifies which authoritative third-party domains (Reddit, G2, TechCrunch, Wikipedia, GitHub) AI engines index to recommend solutions.
- ⚡ **Zero-Key Out-of-the-Box Mode**: Instant high-fidelity simulation mode with zero API keys required so anyone can clone and run in 5 seconds.
- 🔑 **Live API Mode**: Supply standard keys (`OPENAI_API_KEY`, `PERPLEXITY_API_KEY`, `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`) for real-time live model queries.
- 🛠️ **Automated Fixes & Generators**:
  - One-click `llms.txt` and `llms-full.txt` standard specification generator.
  - JSON-LD structured data (`SoftwareApplication`, `FAQPage`, `SpeakableSpecification`).
  - Inverted Pyramid "Answer Nuggets" designed for zero-click AI snippet ingestion.
- 💻 **Terminal CLI**: Run audits in terminal or CI/CD pipelines via `npx omnigeo audit <url>`.
- 🔌 **Model Context Protocol (MCP)**: Native MCP server for Cursor, Windsurf, Claude Desktop, and Claude Code.

---

## 📊 How It Compares

| Feature | OmniGEO (Open Source) | XanLens | Commercial Tools ($500-$2K/mo) |
|---|---|---|---|
| **Cost** | **100% Free & Open Source** | Free / Freemium | \$500 – \$2,500/mo |
| **Engines Evaluated** | Perplexity, ChatGPT, Claude, Gemini, DeepSeek | 7 Engines | Usually 2-3 |
| **Works Without API Keys** | ✅ Yes (Intelligent Simulation Sandbox) | ❌ Requires Gemini key | ❌ Paid account only |
| **Live API Mode** | ✅ Yes (OpenAI, Perplexity, etc.) | ✅ Yes | ✅ Yes |
| **Share of Voice (SOV) %** | ✅ Visual Competitor Benchmark | ⚠️ Basic | ✅ Yes |
| **Citation Attribution Map** | ✅ Pinpoints Reddit, G2, Wiki gaps | ⚠️ Partial | ✅ Yes |
| **Auto `llms.txt` Generator** | ✅ Built-in 1-Click Generator | ❌ None | ⚠️ Extra add-on |
| **JSON-LD Schema Fixes** | ✅ Speakable & FAQ Schema | ❌ None | ❌ None |
| **CLI Tool** | ✅ `npx omnigeo audit <url>` | ❌ None | ❌ None |
| **MCP Server Support** | ✅ Cursor & Claude Desktop native | ❌ None | ❌ None |

---

## 🚀 Quick Start

### 1. Clone & Run Web UI

```bash
# Clone the repository
git clone https://github.com/moajez/omnigeo.git
cd omnigeo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to launch the interactive dashboard!

### 2. Optional: Add Live API Keys

To run live queries with live citations, create a `.env.local` file:

```bash
cp .env.example .env.local
```

Add your keys (all optional; if omitted, intelligent simulation mode runs automatically):

```env
PERPLEXITY_API_KEY=pplx-xxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxx
GEMINI_API_KEY=AIzaxxxxxxxxxxxxxxxxxxxxxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 💻 CLI Usage

Audit any brand or URL directly from your terminal:

```bash
# Basic audit
npm run cli audit https://stripe.com

# Audit with custom competitors
npm run cli audit https://linear.app --competitors "Jira,Asana,Monday"

# Output raw JSON for scripts or automation
npm run cli audit https://supabase.com --json --out supabase-geo.json
```

---

## 🔌 Model Context Protocol (MCP)

OmniGEO includes a built-in MCP server that allows AI code editors (Cursor, Windsurf, Claude Desktop) to run GEO audits and generate `llms.txt` directly.

### Cursor / Windsurf Configuration

Add this to your `claude_desktop_config.json` or Cursor MCP settings:

```json
{
  "mcpServers": {
    "omnigeo": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/omnigeo/bin/mcp.mjs"]
    }
  }
}
```

### Available MCP Tools

- `omnigeo_audit_brand`: Audits visibility score, competitor share-of-voice, and citation gaps.
- `omnigeo_generate_llms_txt`: Generates citable `llms.txt` file and JSON-LD schema for any brand.

---

## 📁 Project Structure

```
omnigeo/
├── app/                  # Next.js 16 App Router UI & API endpoints
│   ├── api/audit/        # POST /api/audit (Multi-engine orchestrator)
│   ├── api/presets/      # GET /api/presets (1-click brand benchmarks)
│   ├── globals.css       # Tailwind CSS v4 styling & dark theme
│   ├── layout.tsx        # SEO metadata & OpenGraph tags
│   └── page.tsx          # Full-featured interactive dashboard
├── bin/
│   ├── cli.mjs           # Terminal CLI interface (commander)
│   └── mcp.mjs           # Model Context Protocol (MCP) Server
├── lib/
│   ├── scraper.ts        # Live HTML metadata, schema & category detection
│   ├── prompts.ts        # Buyer-intent & alternative query generator
│   ├── analyzer.ts       # Composite GEO scoring & SOV algorithm
│   ├── optimizer.ts      # llms.txt, JSON-LD schema & inverted pyramid copy
│   ├── mockData.ts       # 1-click test brand benchmarks
│   └── engines/          # Perplexity, OpenAI, Claude, Gemini & Simulator
└── types/
    └── geo.ts            # Complete TypeScript domain model
```

---

## 🤝 Contributing

Contributions are welcome! Whether it's adding new answer engine adapters, improving citation parsing, or adding new AEO schema templates:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

<div align="center">
  <sub>Built with ⚡ by Moajez Lalani • Featured under GitHub topic <a href="https://github.com/topics/brand-visibility">brand-visibility</a></sub>
</div>
