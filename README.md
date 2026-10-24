<div align="center">

# ⚡ OmniGEO — Open-Source Generative Engine & Answer Engine Optimization (GEO/AEO) Platform

### **The Open-Source Standard for AI Brand Visibility, LLM Citations & Competitor Share-of-Voice**

**Audit, monitor, and optimize what ChatGPT, Perplexity, Claude, Gemini & DeepSeek say about your brand.**

[![GitHub stars](https://img.shields.io/github/stars/moajez/omnigeo?style=for-the-badge&logo=github&color=06b6d4)](https://github.com/moajez/omnigeo/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/moajez/omnigeo?style=for-the-badge&logo=github&color=10b981)](https://github.com/moajez/omnigeo/network/members)
[![GitHub issues](https://img.shields.io/github/issues/moajez/omnigeo?style=for-the-badge&color=8b5cf6)](https://github.com/moajez/omnigeo/issues)
[![GitHub license](https://img.shields.io/github/license/moajez/omnigeo?style=for-the-badge)](https://github.com/moajez/omnigeo/blob/main/LICENSE)
[![GitHub topic](https://img.shields.io/badge/topic-brand--visibility-blue?style=for-the-badge&logo=github)](https://github.com/topics/brand-visibility)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-Compatible-8b5cf6?style=for-the-badge)](https://modelcontextprotocol.io/)

<br/>

> ⭐️ **If you find OmniGEO helpful, please support the project by dropping a [Star on GitHub](https://github.com/moajez/omnigeo)!**  
> It helps us remain 100% free, community-driven, and open-source.

<br/>

[**Live Interactive Demo**](#-quick-start) • [**Product Walkthrough**](#-product-screenshots--feature-walkthrough) • [**CLI Tool**](#-cli-usage) • [**MCP Server**](#-model-context-protocol-mcp) • [**Feature Comparison**](#-how-omnigeo-compares)

</div>

---

## 📸 Product Screenshots & Feature Walkthrough

OmniGEO brings enterprise-grade AI brand analytics into a clean, modern interface:

### 1. 📊 Executive Overview & Multi-Factor GEO Composite Score
> *Composite score (0-100), AI Visibility Rate, Share of Voice (SOV), Perception Index, Citability score, and automated algorithmic critiques.*

<p align="center">
  <img src="./public/screenshots/overview-dashboard.png" alt="OmniGEO Executive Overview Dashboard" width="100%" style="border-radius: 12px; border: 1px solid #27272a; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />
</p>

---

### 2. 🤖 Multi-Engine Side-by-Side Consensus (5 Models)
> *Compare raw answers, mention ranking, and latency across Perplexity AI, ChatGPT (GPT-4o), Claude 3.7 Sonnet, Google Gemini 2.5, and DeepSeek R1 on real buyer-intent prompts.*

<p align="center">
  <img src="./public/screenshots/multi-engine-answers.png" alt="OmniGEO Multi-Engine Answers Matrix" width="100%" style="border-radius: 12px; border: 1px solid #27272a; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />
</p>

---

### 3. 📈 Competitor Share of Voice (SOV %) Benchmark
> *Visualize your brand's recommendation frequency vs named market competitors on category-defining queries.*

<p align="center">
  <img src="./public/screenshots/share-of-voice-sov.png" alt="OmniGEO Competitor Share of Voice Benchmark" width="100%" style="border-radius: 12px; border: 1px solid #27272a; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />
</p>

---

### 4. 🌐 Citation Attribution Graph & Backlink Gap Detection
> *Reverse-engineer which authoritative third-party sources (Reddit, G2, TechCrunch, GitHub, Hacker News) LLMs rely on, and flag high-priority citation gaps where competitors are cited instead.*

<p align="center">
  <img src="./public/screenshots/citation-graph-backlinks.png" alt="OmniGEO Citation Attribution and Gap Map" width="100%" style="border-radius: 12px; border: 1px solid #27272a; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />
</p>

---

### 5. 🛠️ Automated AEO Fixes, `llms.txt` & Schema Generators
> *Instant copy-ready `/llms.txt` standard file, JSON-LD Structured Data (`SoftwareApplication`, `FAQPage`, `SpeakableSpecification`), and Inverted Pyramid "Answer Nuggets" designed for zero-click AI snippet quoting.*

<p align="center">
  <img src="./public/screenshots/aeo-fixes-llmstxt.png" alt="OmniGEO Automated AEO Fixes and llms.txt Generator" width="100%" style="border-radius: 12px; border: 1px solid #27272a; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />
</p>

---

## 💡 The Problem: Why Traditional SEO is Dying

Over **60% of organic searches now end in zero clicks**. Users no longer browse ten blue links on Google—they ask **ChatGPT, Perplexity, Claude, or Google AI Overviews** directly:

* *"What is the best issue tracker for scaling engineering teams?"*
* *"Top modern alternative to legacy payment platforms with good developer APIs?"*
* *"Which database should I use for a high-concurrency SaaS?"*

If your product is not actively cited by AI search engines, **your brand is effectively invisible to modern buyers**.

Existing proprietary AI brand tracking platforms (Profound, Peec AI, Athena, Otterly) charge **\$500 to \$2,500/month**. 

**OmniGEO is 100% free, MIT-licensed, and self-hostable.**

```
   ____                   _  ____ ______ ____  
  / __ \____ ___  ____   (_)/ ____/ ____/ __ \ 
 / / / / __ `__ \/ __ \ / // / __/ __/ / / / / 
/ /_/ / / / / / / / / // // /_/ / /___/ /_/ /  
\____/_/ /_/ /_/_/ /_//_/ \____/_____/\____/   
Open Source Generative Engine & Answer Engine Optimization (GEO/AEO)
```

---

## 🎯 Core Features & Capabilities

- 🤖 **5-Engine Multi-Model Consensus**:
  - **Perplexity AI** (`sonar-pro` with live web search and online citation parsing)
  - **ChatGPT / OpenAI** (`gpt-4o` / `gpt-4o-mini`)
  - **Anthropic Claude** (`claude-3-7-sonnet` architectural and DX reasoning)
  - **Google Gemini** (`gemini-2.5-pro` search integration and community momentum)
  - **DeepSeek** (`deepseek-r1` reasoning and price-performance benchmark)
- ⚡ **Zero-Key Out-of-the-Box Sandbox**:
  - Run complete audits instantly with **zero API keys required**. Uses an intelligent, data-driven heuristic consensus engine based on real web scraping and domain analysis.
- 🔑 **Live API Mode**:
  - Plug in your standard API keys (`OPENAI_API_KEY`, `PERPLEXITY_API_KEY`, `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`) to run live queries against production AI answer engines.
- 📊 **Share of Voice (SOV %)**:
  - Benchmark your brand against 3+ competitors across generic buyer-intent queries.
- 🌐 **Citation Attribution Graph**:
  - Maps third-party backlinks (Reddit discussions, G2 Grid reviews, GitHub repositories, Wikipedia entries) that models use to formulate their answers.
- 🛠️ **One-Click AEO Content Fixes**:
  - **`llms.txt` Spec Generator**: Modern root markdown index for AI crawlers.
  - **JSON-LD Schema**: Machine-readable entity specifications with FAQ and Speakable schema.
  - **Inverted Pyramid Answer Nugget**: Declarative copy snippet designed to be quoted verbatim by Perplexity and ChatGPT Search.
- 🌓 **Interactive Light / Dark Theme**:
  - Seamless theme toggle with local storage persistence and system preference detection.
- 💻 **Terminal CLI**:
  - Run headless audits in terminal or CI/CD pipelines via `npm run cli audit <url>`.
- 🔌 **Model Context Protocol (MCP) Server**:
  - Native MCP server for Cursor, Windsurf, Claude Desktop, and Claude Code.

---

## 📊 How OmniGEO Compares

| Capability | OmniGEO (Open Source) | XanLens | Closed SaaS ($500-$2,500/mo) |
|:---|:---:|:---:|:---:|
| **Pricing** | **100% Free (MIT)** | Free / Freemium | \$500 – \$2,500/mo |
| **Engines Evaluated** | Perplexity, ChatGPT, Claude, Gemini, DeepSeek | 7 Engines | 2–3 Engines |
| **Works with Zero API Keys** | ✅ Yes (Simulation Sandbox) | ❌ Requires Gemini key | ❌ Paid account only |
| **Live API Mode** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Share of Voice (SOV %)** | ✅ Visual Comparison Bars | ⚠️ Basic | ✅ Yes |
| **Citation Attribution Map** | ✅ Reddit, G2, Wiki gaps | ⚠️ Partial | ✅ Yes |
| **Auto `/llms.txt` Generator** | ✅ Built-in 1-Click | ❌ None | ⚠️ Extra add-on |
| **JSON-LD Schema Generator** | ✅ Speakable & FAQ Schema | ❌ None | ❌ None |
| **Terminal CLI Tool** | ✅ `npx omnigeo audit <url>` | ❌ None | ❌ None |
| **Model Context Protocol (MCP)**| ✅ Native MCP Server | ❌ None | ❌ None |
| **Light & Dark Theme** | ✅ Yes | ❌ Dark only | ⚠️ Varies |

---

## 🚀 Quick Start

### 1. Clone & Run Web App

```bash
# Clone repository
git clone https://github.com/moajez/omnigeo.git
cd omnigeo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

### 2. Optional: Add Live API Keys

To run live production queries with real-time web citations:

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
# Basic brand audit
npm run cli audit https://linear.app

# Audit with custom competitors
npm run cli audit https://stripe.com --competitors "Paddle,Adyen,Square"

# Export report as JSON
npm run cli audit https://supabase.com --json --out supabase-geo.json
```

---

## 🔌 Model Context Protocol (MCP)

OmniGEO includes a built-in MCP server that enables AI code editors (Cursor, Windsurf, Claude Desktop) to run GEO audits and generate `llms.txt` directly within your IDE.

### Cursor / Windsurf / Claude Desktop Setup

Add this snippet to your `claude_desktop_config.json` or Cursor MCP settings:

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

* `omnigeo_audit_brand`: Audits visibility score, competitor share-of-voice, and citation gaps.
* `omnigeo_generate_llms_txt`: Generates standard `llms.txt` file and JSON-LD schema for any brand.

---

## 📁 Repository Structure

```
omnigeo/
├── assets/screenshots/   # High-resolution UI screenshots for README
├── app/                  # Next.js 16 App Router (React 19 + Tailwind v4)
│   ├── api/audit/        # POST /api/audit (Multi-engine orchestrator)
│   ├── api/presets/      # GET /api/presets (1-click brand benchmarks)
│   ├── globals.css       # Tailwind CSS v4 styling & dark/light theme
│   ├── layout.tsx        # SEO metadata, OpenGraph tags & theme script
│   └── page.tsx          # Full-featured interactive dashboard
├── bin/
│   ├── cli.mjs           # Terminal CLI interface (commander)
│   └── mcp.mjs           # Model Context Protocol (MCP) Server
├── lib/
│   ├── scraper.ts        # Live HTML metadata, schema & category detection
│   ├── prompts.ts        # Buyer-intent & alternative query generator
│   ├── analyzer.ts       # Composite GEO scoring & SOV algorithm
│   ├── optimizer.ts      # llms.txt, JSON-LD schema & inverted pyramid copy
│   ├── mockData.ts       # 1-click test brand benchmarks (Linear, Stripe, Supabase)
│   └── engines/          # Perplexity, OpenAI, Claude, Gemini & Simulator
└── types/
    └── geo.ts            # TypeScript definitions for GEO audits
```

---

## 🗺️ Roadmap & Upcoming Milestones

- [x] Multi-engine prompt auditing (Perplexity, ChatGPT, Claude, Gemini, DeepSeek)
- [x] Zero-key simulation sandbox & live API mode
- [x] Share of voice (SOV %) and competitor benchmarking
- [x] Citation graph & Reddit/G2 gap detection
- [x] 1-click `/llms.txt` and JSON-LD schema generation
- [x] Model Context Protocol (MCP) Server
- [x] Light & Dark theme toggle with persistence
- [ ] Automated weekly GitHub Actions cron for brand visibility alerts
- [ ] Slack & Discord webhook notifications when competitors overtake your ranking
- [ ] Local Ollama & LMStudio integration for 100% offline local model audits

---

## 🤝 Contributing

Contributions are warmly welcomed! Feel free to submit an issue or open a pull request:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.

<div align="center">
  <br/>
  <sub>Built with ⚡ by <b>Moajez Lalani</b> • Featured under GitHub topic <a href="https://github.com/topics/brand-visibility">brand-visibility</a></sub>
  <br/><br/>
  <a href="https://github.com/moajez/omnigeo">
    <img src="https://img.shields.io/badge/⭐️_Star_OmniGEO_on_GitHub-06b6d4?style=for-the-badge&logo=github" alt="Star OmniGEO on GitHub"/>
  </a>
</div>
