'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Search, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Copy, 
  Check, 
  ExternalLink, 
  Award, 
  Layers, 
  FileText, 
  Code, 
  BarChart3, 
  Cpu, 
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  RefreshCw,
  Terminal,
  Star
} from 'lucide-react';
import { GeoAuditReport, EngineId } from '@/types/geo';
import { PRESET_BRANDS } from '@/lib/mockData';

export default function HomePage() {
  const [targetUrl, setTargetUrl] = useState('https://stripe.com');
  const [competitorsInput, setCompetitorsInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [auditReport, setAuditReport] = useState<GeoAuditReport | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'engines' | 'sov' | 'citations' | 'fixes' | 'mcp'>('overview');
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Run initial audit on Stripe to ensure first render is rich & impressive
  useEffect(() => {
    handleRunAudit('https://stripe.com');
  }, []);

  async function handleRunAudit(urlToAudit?: string) {
    const finalUrl = (urlToAudit || targetUrl).trim();
    if (!finalUrl) return;

    setIsLoading(true);
    try {
      const competitors = competitorsInput
        ? competitorsInput.split(',').map(s => s.trim()).filter(Boolean)
        : undefined;

      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: finalUrl, competitors }),
      });

      if (!res.ok) throw new Error('Audit failed');
      const data: GeoAuditReport = await res.json();
      setAuditReport(data);

      // Trigger celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#3b82f6', '#8b5cf6'],
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function copyToClipboard(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 flex flex-col font-sans">
      {/* Top Banner / Announcement */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-purple-950/60 border-b border-cyan-800/30 px-4 py-2 text-xs text-center text-cyan-300 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>Open Source Generative Engine (GEO) & Answer Engine Optimization (AEO) Engine</span>
        <span className="hidden sm:inline text-zinc-500">•</span>
        <a 
          href="https://github.com/topics/brand-visibility" 
          target="_blank" 
          rel="noreferrer"
          className="underline hover:text-cyan-200 transition-colors inline-flex items-center gap-1 font-medium"
        >
          Featured in #brand-visibility <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Header / Nav */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  OmniGEO
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                  v1.0.0
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block">
                AI Brand Visibility & Citation Intelligence
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/moajez/omnigeo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-all shadow-sm"
            >
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span>Star on GitHub</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-zinc-800 text-[10px] text-yellow-400 font-bold border border-yellow-500/30">
                ★ 33+
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Audit Input Section */}
      <section className="relative overflow-hidden pt-8 pb-10 border-b border-zinc-800/50 bg-gradient-to-b from-cyan-950/10 via-zinc-950/30 to-[#07090e]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Auditing ChatGPT, Perplexity, Claude, Gemini & DeepSeek</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            See What AI Engines Say About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Your Brand</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Zero heuristics. We test real buyer-intent prompts across leading answer engines, pinpoint citation sources, track competitor share-of-voice, and generate instant content fixes.
          </p>

          {/* Audit URL Input Form */}
          <div className="max-w-3xl mx-auto bg-zinc-900/90 p-2 rounded-2xl border border-zinc-800 shadow-2xl shadow-cyan-950/30 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="Enter URL or brand (e.g. https://stripe.com or supabase.com)"
                className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleRunAudit()}
              />
            </div>
            
            <button
              onClick={() => handleRunAudit()}
              disabled={isLoading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Auditing AI Consensus...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Run GEO Audit</span>
                </>
              )}
            </button>
          </div>

          {/* Preset Brands Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
            <span className="text-zinc-500">Quick 1-Click Demos:</span>
            {PRESET_BRANDS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  setTargetUrl(preset.url);
                  handleRunAudit(preset.url);
                }}
                className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition-all ${
                  auditReport?.brand.brandName.toLowerCase() === preset.name.toLowerCase()
                    ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Dashboard Content */}
      {auditReport && (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
          {/* Brand Metadata Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {auditReport.brand.brandName}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-300">
                  {auditReport.brand.category}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Audit Verified
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1">
                {auditReport.brand.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-zinc-500">Audit ID:</span>
              <code className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 font-mono text-[11px]">
                {auditReport.id}
              </code>
            </div>
          </div>

          {/* Metric Scorecards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 my-6">
            {/* Overall Score */}
            <div className="col-span-2 sm:col-span-1 p-5 rounded-2xl bg-gradient-to-b from-cyan-950/40 via-zinc-900/60 to-zinc-950 border border-cyan-800/40 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                  Composite GEO Score
                </span>
                <Award className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">
                  {auditReport.overallScore}
                </span>
                <span className="text-sm text-zinc-400">/ 100</span>
              </div>
              <div className="mt-3 w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-700" 
                  style={{ width: `${auditReport.overallScore}%` }} 
                />
              </div>
              <span className="text-[11px] text-zinc-400 mt-2 block">
                {auditReport.overallScore >= 80 ? 'Grade A+: High Model Primacy' : 'Grade B: Moderate AI Visibility'}
              </span>
            </div>

            {/* AI Visibility Score */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  AI Visibility Rate
                </span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-emerald-400">
                  {auditReport.metrics.visibilityScore}%
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2">
                Percent of buyer prompts where models cite your brand
              </p>
            </div>

            {/* Share of Voice */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  Share of Voice (SOV)
                </span>
                <BarChart3 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-blue-400">
                  {auditReport.metrics.shareOfVoice}%
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2">
                Share vs top competitors ({auditReport.brand.competitors.slice(0, 2).join(', ')})
              </p>
            </div>

            {/* Sentiment Rating */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  Perception Index
                </span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-purple-400">
                  {auditReport.metrics.sentimentIndex}/100
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2">
                Weighted by Champion vs Alternative mentions
              </p>
            </div>

            {/* Citability Index */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  Citability Index
                </span>
                <FileText className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-amber-400">
                  {auditReport.metrics.citabilityIndex}/100
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2">
                Information density & structured markup readiness
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto border-b border-zinc-800 pb-2 mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Overview & Audits</span>
            </button>

            <button
              onClick={() => setActiveTab('engines')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'engines'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Multi-Engine Answers ({auditReport.promptAudits[0]?.totalEngines} Models)</span>
            </button>

            <button
              onClick={() => setActiveTab('sov')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'sov'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Competitor Share of Voice</span>
            </button>

            <button
              onClick={() => setActiveTab('citations')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'citations'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Citations & Backlink Gaps ({auditReport.citations.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('fixes')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'fixes'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>AEO Fixes & llms.txt</span>
            </button>

            <button
              onClick={() => setActiveTab('mcp')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'mcp'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>CLI & MCP Setup</span>
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Prompt Breakdown Summary */}
                <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>Real Prompts Tested Across AI Answer Engines</span>
                  </h3>

                  <div className="space-y-3">
                    {auditReport.promptAudits.map((pa, idx) => (
                      <div 
                        key={pa.promptId}
                        onClick={() => {
                          setSelectedPromptIndex(idx);
                          setActiveTab('engines');
                        }}
                        className="p-4 rounded-xl bg-zinc-950/60 hover:bg-zinc-950 border border-zinc-800/80 hover:border-cyan-800/60 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                              {pa.category.replace('_', ' ')}
                            </span>
                            <span className="text-xs text-zinc-500">
                              Prompt #{idx + 1}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-zinc-200 group-hover:text-cyan-300 transition-colors">
                            &quot;{pa.promptText}&quot;
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-xs font-bold text-emerald-400">
                              {pa.brandMentionedCount} / {pa.totalEngines} CITED
                            </span>
                            <span className="text-[10px] text-zinc-500 block">
                              AI Consensus
                            </span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Citability Critiques */}
                <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Algorithmic Citability Findings & Vulnerabilities</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {auditReport.citability.critiques.map((critique, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800/60 text-xs text-zinc-300 flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-950/80 text-amber-400 border border-amber-800/50 flex items-center justify-center font-bold text-[10px] shrink-0">
                          {idx + 1}
                        </span>
                        <p>{critique}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Side Column: Actionable Recommendations */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/20 via-zinc-900/60 to-zinc-950 border border-cyan-800/30">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Top High-Impact GEO Fixes</span>
                  </h3>
                  <p className="text-xs text-zinc-400 mb-4">
                    Deploy these three optimizations to maximize Perplexity and ChatGPT Search citation velocity:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-cyan-900/40">
                      <span className="text-cyan-400 font-bold text-xs">1. Add llms.txt</span>
                      <p className="text-xs text-zinc-300 mt-1">
                        Host <code className="text-cyan-300">/llms.txt</code> to provide structured markdown for AI scrapers.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-cyan-900/40">
                      <span className="text-cyan-400 font-bold text-xs">2. Inverted Pyramid Hero Copy</span>
                      <p className="text-xs text-zinc-300 mt-1">
                        Add direct declarative definitions on your homepage so LLMs quote your specs verbatim.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-cyan-900/40">
                      <span className="text-cyan-400 font-bold text-xs">3. Close Reddit & G2 Citation Gaps</span>
                      <p className="text-xs text-zinc-300 mt-1">
                        Target community discussions where competitors currently capture 60%+ share of citations.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab('fixes')}
                    className="w-full mt-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    View Code Fixes & Schema →
                  </button>
                </div>

                {/* Quick Export Card */}
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs">
                  <span className="text-zinc-400 font-semibold block mb-2">Export Audit</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const blob = new Blob([JSON.stringify(auditReport, null, 2)], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `geo-audit-${auditReport.brand.brandName.toLowerCase()}.json`;
                        a.click();
                      }}
                      className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-colors cursor-pointer text-center"
                    >
                      Download JSON
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-colors cursor-pointer text-center"
                    >
                      Print Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MULTI-ENGINE SIDE-BY-SIDE MATRIX */}
          {activeTab === 'engines' && (
            <div className="space-y-6">
              {/* Prompt Selector Pills */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block mb-2">
                  Select Prompt to Inspect Real Model Answers:
                </span>
                <div className="flex flex-wrap gap-2">
                  {auditReport.promptAudits.map((pa, idx) => (
                    <button
                      key={pa.promptId}
                      onClick={() => setSelectedPromptIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        selectedPromptIndex === idx
                          ? 'bg-cyan-500 text-black border-cyan-400 font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      Prompt #{idx + 1}: {pa.category.replace('_', ' ')}
                    </button>
                  ))}
                </div>
                <div className="mt-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Active Query:</span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    &quot;{auditReport.promptAudits[selectedPromptIndex]?.promptText}&quot;
                  </p>
                </div>
              </div>

              {/* Side by Side Model Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(['perplexity', 'chatgpt', 'claude', 'gemini', 'deepseek'] as EngineId[]).map((engId) => {
                  const pa = auditReport.promptAudits[selectedPromptIndex];
                  const res = pa?.engines[engId];
                  if (!res) return null;

                  return (
                    <div 
                      key={engId} 
                      className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                        res.mentionsBrand
                          ? 'bg-zinc-900/80 border-cyan-900/50 shadow-md shadow-cyan-950/20'
                          : 'bg-zinc-950/60 border-zinc-800/60 opacity-80'
                      }`}
                    >
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3">
                          <div>
                            <h4 className="font-bold text-white text-sm">{res.engineName}</h4>
                            <span className="text-[11px] text-zinc-500 font-mono">{res.model}</span>
                          </div>

                          <div className="flex flex-col items-end">
                            {res.mentionsBrand ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                                {res.sentiment === 'champion' ? '★ Rank #1 Champion' : `Rank #${res.mentionRank} Recommended`}
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-zinc-800 text-zinc-400">
                                Brand Omitted
                              </span>
                            )}
                            <span className="text-[10px] text-zinc-500 mt-0.5">{res.latencyMs}ms</span>
                          </div>
                        </div>

                        {/* Raw AI Response Snippet */}
                        <div className="text-xs text-zinc-300 leading-relaxed font-sans bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/60 max-h-64 overflow-y-auto whitespace-pre-wrap">
                          {res.rawResponse}
                        </div>
                      </div>

                      {/* Footer / Citations */}
                      <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px]">
                        <span className="text-zinc-500">
                          {res.citations.length} Verified Citations
                        </span>
                        <div className="flex items-center gap-1">
                          {res.keyPhrases.slice(0, 2).map((kp, i) => (
                            <span key={i} className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px]">
                              {kp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: COMPETITOR SHARE OF VOICE */}
          {activeTab === 'sov' && (
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Answer Engine Share of Voice (SOV)
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  How often your brand is mentioned vs competitors across all generic buyer-intent questions:
                </p>
              </div>

              <div className="space-y-4">
                {auditReport.competitorSOV.map((item, idx) => {
                  const isTarget = item.name.toLowerCase() === auditReport.brand.brandName.toLowerCase();
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-sm ${isTarget ? 'text-cyan-400' : 'text-zinc-200'}`}>
                            {item.name}
                          </span>
                          {isTarget && (
                            <span className="px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 text-[10px] font-bold">
                              YOUR BRAND
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-zinc-400">
                            {item.mentionCount} Mentions
                          </span>
                          <span className="text-sm font-extrabold text-white">
                            {item.sharePercentage}%
                          </span>
                        </div>
                      </div>

                      <div className="w-full bg-zinc-800/80 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            isTarget 
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                              : 'bg-zinc-600'
                          }`}
                          style={{ width: `${item.sharePercentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: CITATIONS & BACKLINK GAPS */}
          {activeTab === 'citations' && (
            <div className="space-y-6">
              {/* Alert: Gap Opportunities */}
              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-200">
                      High-Priority Citation Gap Detected
                    </h4>
                    <p className="text-xs text-amber-300/80 mt-0.5">
                      Your competitors have strong attribution presence in Reddit and G2 Grid leader comparisons. Earning mentions on these sources will directly increase AI recommendation probability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Citations Table */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h3 className="text-base font-bold text-white mb-4">
                  Sources & Webpages Cited by LLMs
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-zinc-800 text-zinc-400 font-semibold">
                        <th className="pb-3">Source Domain</th>
                        <th className="pb-3">Content / Query Context</th>
                        <th className="pb-3">Type</th>
                        <th className="pb-3">Domain Authority</th>
                        <th className="pb-3">Target Brand Cited?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60">
                      {auditReport.citations.map((c, idx) => (
                        <tr key={idx} className="hover:bg-zinc-950/40 transition-colors">
                          <td className="py-3 font-mono font-medium text-cyan-400">
                            {c.domain}
                          </td>
                          <td className="py-3 text-zinc-300 max-w-xs truncate">
                            <a href={c.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                              {c.title} <ExternalLink className="w-3 h-3 text-zinc-500" />
                            </a>
                          </td>
                          <td className="py-3">
                            <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 uppercase text-[10px] font-bold">
                              {c.sourceType}
                            </span>
                          </td>
                          <td className="py-3 font-bold text-zinc-200">
                            DA {c.authorityScore}
                          </td>
                          <td className="py-3">
                            {c.citesTargetBrand ? (
                              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/50 font-bold">
                                Yes
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-400 border border-rose-800/50 font-bold">
                                Competitors Only
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: AEO FIXES & LLMS.TXT */}
          {activeTab === 'fixes' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Fix 1: llms.txt */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <h3 className="font-bold text-white text-base">
                        Generated /llms.txt Specification
                      </h3>
                    </div>
                    <button
                      onClick={() => copyToClipboard(auditReport.fixes.llmsTxtContent, 'llms')}
                      className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedKey === 'llms' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'llms' ? 'Copied!' : 'Copy File'}</span>
                    </button>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">
                    Deploy this at <code className="text-cyan-300">{auditReport.brand.url}/llms.txt</code> to provide standard documentation formatting for AI crawlers.
                  </p>

                  <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto max-h-72">
                    {auditReport.fixes.llmsTxtContent}
                  </pre>
                </div>
              </div>

              {/* Fix 2: JSON-LD Schema */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-emerald-400" />
                      <h3 className="font-bold text-white text-base">
                        JSON-LD Schema Markup
                      </h3>
                    </div>
                    <button
                      onClick={() => copyToClipboard(auditReport.fixes.jsonLdSchema, 'schema')}
                      className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedKey === 'schema' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'schema' ? 'Copied!' : 'Copy Schema'}</span>
                    </button>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">
                    Inject this into your homepage <code className="text-emerald-400">&lt;head&gt;</code> for machine-readable brand and FAQ entity resolution.
                  </p>

                  <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto max-h-72">
                    {auditReport.fixes.jsonLdSchema}
                  </pre>
                </div>
              </div>

              {/* Fix 3: Inverted Pyramid Answer Snippet */}
              <div className="lg:col-span-2 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <h3 className="font-bold text-white text-base">
                      Inverted Pyramid &quot;Answer Nugget&quot; (Zero-Click Citable Copy)
                    </h3>
                  </div>
                  <button
                    onClick={() => copyToClipboard(auditReport.fixes.invertedPyramidAnswerSnippet, 'nugget')}
                    className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedKey === 'nugget' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'nugget' ? 'Copied!' : 'Copy Snippet'}</span>
                  </button>
                </div>
                <p className="text-xs text-zinc-400 mb-3">
                  LLMs prioritize direct declarative answers over marketing slogans. Place this paragraph prominently in your docs overview or hero section:
                </p>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 italic leading-relaxed">
                  {auditReport.fixes.invertedPyramidAnswerSnippet}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: MCP & CLI SETUP */}
          {activeTab === 'mcp' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* CLI Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-base">Terminal CLI Tool</h3>
                </div>
                <p className="text-xs text-zinc-400 mb-4">
                  Run audits directly from your terminal or CI/CD pipelines with zero dependencies:
                </p>

                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] text-zinc-500 font-bold uppercase">Basic Audit:</span>
                    <pre className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-cyan-300 mt-1">
                      npx omnigeo audit https://stripe.com
                    </pre>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-500 font-bold uppercase">With Competitors & JSON Output:</span>
                    <pre className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-cyan-300 mt-1">
                      npm run cli audit https://stripe.com --competitors &quot;Paddle,Adyen&quot; --json
                    </pre>
                  </div>
                </div>
              </div>

              {/* MCP Server Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <h3 className="font-bold text-white text-base">Model Context Protocol (MCP)</h3>
                </div>
                <p className="text-xs text-zinc-400 mb-4">
                  Add OmniGEO to Cursor, Windsurf, or Claude Desktop config to enable AI brand audits inside your IDE:
                </p>

                <div>
                  <span className="text-[11px] text-zinc-500 font-bold uppercase">claude_desktop_config.json / cursor settings:</span>
                  <pre className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-purple-300 mt-1 overflow-x-auto">
{`{
  "mcpServers": {
    "omnigeo": {
      "command": "node",
      "args": ["${process.cwd()}/bin/mcp.mjs"]
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 px-4 text-center text-xs text-zinc-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-zinc-300">OmniGEO</span>
            <span>— Open Source AEO & GEO Intelligence</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/topics/brand-visibility" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              #brand-visibility Topic
            </a>
            <span>•</span>
            <a 
              href="https://github.com/moajez/omnigeo" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub Repository
            </a>
            <span>•</span>
            <span>MIT License</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
