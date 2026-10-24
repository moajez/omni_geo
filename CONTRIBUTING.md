# Contributing to OmniGEO

Thank you for your interest in contributing to **OmniGEO**!

## How You Can Contribute
1. **Engine Adapters**: Add new AI engine adapters (e.g. Grok, Mistral, Ollama/Local models, Kimi).
2. **Citation Intelligence**: Enhance source classification (e.g. identify specific Reddit threads, YouTube transcripts, Podcast citations).
3. **AEO Content Optimizers**: Add automated generators for `schema.org/Dataset`, `schema.org/ClaimReview`, and custom robots.txt AI crawler rules.
4. **UI Improvements**: Suggest new visual radar charts, historical tracking diffs, or PDF export improvements.

## Development Workflow
```bash
git clone https://github.com/moajez/omnigeo.git
cd omnigeo
npm install
npm run dev
```

Run CLI locally:
```bash
npm run cli audit https://stripe.com
```

Ensure the project builds cleanly before opening a PR:
```bash
npm run build
```
