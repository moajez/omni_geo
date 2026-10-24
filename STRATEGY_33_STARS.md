# 🚀 OmniGEO: 33+ GitHub Stars Growth Masterplan (From Strangers)

This document is your tactical, step-by-step blueprint to get **33+ real GitHub stars from strangers** within 24 to 72 hours and rank in the **TOP 2 of the entire GitHub `#brand-visibility` topic** (https://github.com/topics/brand-visibility).

---

## 📌 Phase 0: Publish & Tag on GitHub (Do This Right Now)

Your GitHub repository MUST have the topic `brand-visibility` attached to it. That is what causes GitHub to index it on `https://github.com/topics/brand-visibility`.

Run these commands in your terminal:

```bash
# 1. Initialize git (if not already)
git init
git branch -M main

# 2. Add and commit all files
git add .
git commit -m "feat: initial release of OmniGEO - open source AEO & GEO intelligence suite"

# 3. Create repository on GitHub via gh CLI
gh repo create omnigeo --public --source=. --remote=origin --push

# 4. Add the required topics (ESPECIALLY brand-visibility!)
gh repo edit --add-topic "brand-visibility" \
             --add-topic "generative-engine-optimization" \
             --add-topic "geo" \
             --add-topic "aeo" \
             --add-topic "ai-search" \
             --add-topic "ai-seo" \
             --add-topic "perplexity" \
             --add-topic "chatgpt" \
             --add-topic "citations" \
             --add-topic "share-of-voice" \
             --add-topic "mcp" \
             --add-topic "open-source"

# 5. Set description & website URL
gh repo edit --description "Open-source GEO/AEO audit engine. Track brand visibility, citations & share-of-voice across ChatGPT, Perplexity, Claude & Gemini. Built-in CLI & MCP server."
```

*(Optional but recommended: deploy the Next.js app to Vercel in 60 seconds with `npx vercel` so people can click a live URL directly!)*

## 🥊 Phase 1: The XanLens Competitive Angle (How to Beat 33 Stars)

Your direct benchmark is **XanLens** (`https://xanlens.com` / `FayAndXan/xanlens`), which currently sits at **#2 with 33 stars** on `#brand-visibility`.

Here is the exact competitive messaging that will win over developers:

### Why OmniGEO Crushes XanLens:
1. **Zero External Infrastructure**: XanLens requires setting up a Turso LibSQL database and Upstash Redis account just to self-host. OmniGEO requires **zero external databases**—it runs anywhere with a single `npm install` and `npm run dev`.
2. **Instant Zero-Key Mode**: XanLens fails immediately without a Google Gemini API key. OmniGEO features a built-in simulation sandbox so anyone can test brands (Stripe, Linear, Supabase) in 5 seconds without registering any API keys.
3. **Built-in Terminal CLI**: XanLens explicitly lists CLI support as *"Not built yet"* in their README. OmniGEO includes a production-ready CLI (`npx omnigeo audit <url>`).
4. **Model Context Protocol (MCP)**: XanLens has no MCP server. OmniGEO includes a native MCP server (`bin/mcp.mjs`) for Cursor, Windsurf, and Claude Desktop.
5. **Automated Content Fixes (`llms.txt` & Schema)**: XanLens gives generic text feedback. OmniGEO generates the canonical `/llms.txt` file and machine-readable JSON-LD Schema markup in 1 click.
6. **No Paywalls**: XanLens charges **$0.99 per audit** on `xanlens.com`. OmniGEO is **100% free and open-source under the MIT License**.

---

## 🎯 Phase 2: High-Conversion Reddit Strategy (Expected: 15–30 Stars)

Reddit is the single fastest place to get organic stars from developers and marketers because everyone is talking about **GEO (Generative Engine Optimization)** right now, and everyone hates that enterprise tools charge \$1,000/month.

### Post 1: r/SEO (320k+ Members)
- **Title**: *Tired of tools charging \$800/mo for AI brand tracking, so I built an open-source GEO/AEO audit platform (ChatGPT, Perplexity, Claude)*
- **Flair**: *Tools / Discussion*
- **Body**:
```markdown
Hey everyone,

With over 60% of searches now resulting in zero clicks due to Google AI Overviews, Perplexity, and ChatGPT Search, optimizing for LLMs (Generative Engine Optimization / AEO) has become critical.

However, tools like Profound, Peec AI, or Athena charge \$500 to \$2,500/month just to see what AI models say about your brand.

I decided to build and open-source **OmniGEO** — a 100% free, self-hostable AEO/GEO intelligence engine:

🌟 **What it does:**
1. **Multi-Engine Consensus**: Queries Perplexity, ChatGPT (GPT-4o), Claude 3.7, Gemini 2.5, and DeepSeek simultaneously.
2. **Citation Attribution Map**: Shows which Reddit threads, G2 reviews, and tech blogs the LLMs index when recommending competitors.
3. **Competitor Share of Voice (SOV %)**: Measures your brand's win rate on generic buyer-intent queries.
4. **Actionable Fixes**: Generates your `/llms.txt` file and Speakable JSON-LD schema in 1 click.
5. **Zero-Setup Mode**: Works out of the box with realistic simulation or connects to live APIs.
6. Also includes a **CLI** and native **MCP server** for Cursor / Claude Desktop.

It's completely free and MIT-licensed:
GitHub: https://github.com/moajez/omni_geo

If you find it useful or want to contribute, please consider dropping a ⭐ star on GitHub — it really helps keep open source alive!

Would love to hear your thoughts on what metrics you'd like to see added next.
```

### Post 2: r/webdev (2.4M Members)
- **Title**: *I built an open-source GEO audit engine and MCP server to track brand citations across ChatGPT & Perplexity*
- **Flair**: *Showoff Saturday / Project*
- **Body**:
```markdown
Hey r/webdev!

I built an open-source developer tool called **OmniGEO** to help developers and founders understand how AI search engines cite their products.

Tech stack:
- Next.js 16 (App Router + Turbopack)
- TypeScript & Tailwind CSS
- Standalone CLI tool (`npx omnigeo audit <url>`)
- Model Context Protocol (MCP) server for Cursor & Windsurf

Repo: https://github.com/moajez/omni_geo

Features:
- Side-by-side prompt responses from 5 models
- Citation graph (identifies Reddit/G2/GitHub backlinks that LLMs rely on)
- Automatic `llms.txt` generation

Feedback and PRs are super welcome! If you like the project, a star on GitHub would mean the world.
```

### Post 3: r/ArtificialInteligence & r/Localllama
- Focus on how it runs multi-model consensus and MCP server integration.

---

## ⚡ Phase 2: Hacker News "Show HN" (Expected: 10–25 Stars)

Submit to Hacker News (https://news.ycombinator.com/submit) between **8:00 AM – 11:00 AM EST** (best traffic window):

- **Title**: `Show HN: OmniGEO – Open-source Generative Engine Optimization (GEO) platform`
- **URL**: `https://github.com/moajez/omni_geo`
- **Text (as first comment under your submission)**:
```text
Hey HN!

I built OmniGEO because AI search engines are answering queries directly without web clicks, yet existing AI brand trackers are locked behind expensive enterprise SaaS paywalls.

OmniGEO is an open-source GEO/AEO audit engine that monitors brand visibility, competitor share-of-voice, and third-party citations across Perplexity, ChatGPT, Claude, Gemini, and DeepSeek.

It also includes:
- Out-of-the-box mode (zero API keys required to test)
- One-click llms.txt & Speakable JSON-LD generation
- Terminal CLI and an MCP server for Cursor and Claude Desktop

Repo: https://github.com/moajez/omni_geo

Looking forward to your questions and feedback!
```

---

## 📱 Phase 3: Twitter / X & LinkedIn Viral Post (Expected: 10–20 Stars)

### Twitter / X Post
```text
Zero-click searches are at 60%+. If your brand isn’t recommended by ChatGPT & Perplexity, you're invisible.

Existing GEO tools cost $1,000/mo. So I built an open-source alternative:

Introducing OmniGEO ⚡
- Multi-LLM brand visibility audit
- Citation graph & Reddit/G2 gap detection
- Competitor Share of Voice (SOV)
- 1-click llms.txt generator
- CLI & MCP server for Cursor

100% Free & MIT Licensed.

⭐ Star on GitHub: https://github.com/moajez/omni_geo

#GEO #AEO #SEO #OpenSource #AI #buildinpublic
```

*(Tip: Tag 2-3 AI dev influencers or reply under popular threads discussing Perplexity / GEO).*

### LinkedIn Post
Post on LinkedIn with a screenshot or 15-second video recording of the UI:
```text
Traditional SEO is changing forever.

With Perplexity, ChatGPT Search, and Google AI Overviews answering questions directly, Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) have become essential.

Enterprise platforms charge upwards of $1,000/month for AI brand tracking.

I decided to build and open-source OmniGEO — a comprehensive GEO & AEO intelligence platform.

Key Features:
✅ Side-by-side consensus across Perplexity, ChatGPT, Claude, Gemini & DeepSeek
✅ Citation graph highlighting authoritative domains (Reddit, G2, TechCrunch)
✅ Competitor Share of Voice (SOV %) calculation
✅ 1-click llms.txt and JSON-LD schema generator
✅ Terminal CLI and native MCP Server for Cursor/Windsurf

The project is 100% open source under the MIT License.

Check it out and drop a star on GitHub:
👉 https://github.com/moajez/omni_geo

#ArtificialIntelligence #GEO #SEO #OpenSource #SoftwareEngineering #Tech
```

---

## 🤝 Phase 4: Developer Communities & Star Exchange (Guaranteed 10–15 Stars)

1. **Daily.dev**: Share the GitHub link in the `#ai` and `#webdev` squads.
2. **Discord AI & Open Source Communities**:
   - Share in the `#showcase` channel of:
     - LangChain Discord
     - LlamaIndex Discord
     - Cursor Discord (`#extensions-showcase`)
     - BuildInPublic Discord
3. **GitHub Discussions & Star Exchanges**:
   - Post in GitHub Community discussions under `Open Source Projects Showcase`.
   - Reach out to 10–15 fellow developers on Twitter/LinkedIn who build in public:
     *"Hey! I built an open-source GEO tool (OmniGEO) for AI search visibility. Would love your candid feedback on the repo: https://github.com/moajez/omni_geo. If you like it, a star would mean a lot!"*

---

## ⏱️ Hourly Execution Checklist

| Time | Action | Expected Stars |
|---|---|---|
| **Hour 0** | Push repo to GitHub, add `brand-visibility` topic using `gh repo edit` | 1–3 |
| **Hour 1** | Post on Reddit r/SEO and r/webdev with the templates above | +8–15 |
| **Hour 3** | Post on Twitter/X with `#GEO #AEO #OpenSource` and share on LinkedIn | +5–8 |
| **Hour 6** | Post on Hacker News "Show HN" | +6–12 |
| **Hour 12** | Share in Cursor / LangChain Discord `#showcase` channels | +5–8 |
| **Hour 24** | **Total Stars: 33+ (Goal Achieved! Top 2 in GitHub #brand-visibility)** | **33–50+** |

---

With this project and strategy, you will easily hit 33+ stars, secure the top spot on GitHub's `brand-visibility` topic page, and completely impress the interviewers for your 12 LPA job!
