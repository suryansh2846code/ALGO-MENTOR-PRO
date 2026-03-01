import React, { useState, useRef, useEffect } from 'react';
import { getMentorResponse } from './services/geminiService';
import ReactMarkdown from 'react-markdown';
import { 
  Terminal, 
  Send, 
  Loader2, 
  Copy, 
  Check, 
  BookOpen, 
  Code2, 
  BrainCircuit, 
  Sparkles,
  ChevronRight,
  History
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EXAMPLES = [
  {
    title: "Two Sum",
    problem: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
  },
  {
    title: "Valid Parentheses",
    problem: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid."
  },
  {
    title: "Merge Intervals",
    problem: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals."
  }
];

export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>("### Approach\nSome explanation here\n\n### Code\n```cpp\nint main(){}\n```\n\n### Complexity\nTime: O(n)");
  const [activeTab, setActiveTab] = useState<"approach" | "code" | "complexity">("approach");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<{ title: string; problem: string; response: string }[]>([]);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async (problemText: string = input) => {
    if (!problemText.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setResponse(null);
    
    try {
      const result = await getMentorResponse(problemText);
      setResponse(result);
      
      // Add to history
      const title = problemText.slice(0, 30) + (problemText.length > 30 ? '...' : '');
      setHistory(prev => [{ title, problem: problemText, response: result }, ...prev].slice(0, 10));
      
    } catch (err: any) {
      setError(err.message || "Something went wrong while generating the response.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const loadFromHistory = (item: { problem: string; response: string }) => {
    setInput(item.problem);
    setResponse(item.response);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const getSection = (section: "approach" | "code" | "complexity") => {
  if (!response) return "";

  const lower = response.toLowerCase();

  const approachStart = lower.indexOf("### approach");
  const codeStart = lower.indexOf("### code");
  const complexityStart = lower.indexOf("### complexity");

  if (section === "approach") {
    return response.slice(
      approachStart,
      codeStart !== -1 ? codeStart : response.length
    );
  }

  if (section === "code") {
    return response.slice(
      codeStart,
      complexityStart !== -1 ? complexityStart : response.length
    );
  }

  if (section === "complexity") {
    return response.slice(complexityStart);
  }

  return response;
};

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">AlgoMentor <span className="text-indigo-600">Pro</span></h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
            <span className="hidden sm:inline">FAANG-Level Prep</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:inline" />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
              <Code2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Input & Examples */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 self-start">
            <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2 text-gray-900 font-medium">
                <Terminal className="w-4 h-4 text-indigo-600" />
                <h2>Problem Statement</h2>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste the LeetCode problem description here..."
                className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-sm leading-relaxed"
              />
              <button
                onClick={() => handleGenerate()}
                disabled={isLoading || !input.trim()}
                className={cn(
                  "w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all",
                  isLoading 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                    : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] shadow-lg shadow-indigo-200"
                )}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing Problem...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate Explanation
                  </>
                )}
              </button>
            </section>

            {/* Examples */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 uppercase tracking-wider px-2">
                <BookOpen className="w-3 h-3" />
                Try an Example
              </div>
              <div className="grid grid-cols-1 gap-2">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex.title}
                    onClick={() => {
                      setInput(ex.problem);
                      handleGenerate(ex.problem);
                    }}
                    className="group flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/30 transition-all text-left"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700">{ex.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                  </button>
                ))}
              </div>
            </section>

            {/* Info Section */}
            <section className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
              <div className="flex gap-3">
                <div className="mt-0.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Mentor Tip</h4>
                  <p className="text-xs text-indigo-700 leading-relaxed">
                    Paste the full problem description including constraints. The mentor will provide a structured breakdown, optimal C++ code, and dry runs.
                  </p>
                </div>
              </div>
            </section>

            {/* History */}
            {history.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 uppercase tracking-wider px-2">
                  <History className="w-3 h-3" />
                  Recent Sessions
                </div>
                <div className="space-y-2">
                  {history.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => loadFromHistory(item)}
                      className="w-full p-3 bg-white/50 border border-gray-100 rounded-xl hover:bg-white hover:border-gray-200 transition-all text-left text-xs text-gray-500 truncate"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Response */}
          <div className="lg:col-span-7">
            <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
  <BrainCircuit className="w-4 h-4 text-indigo-600" />
  AI Mentor Output
</h2>
            {!response && !isLoading && !error && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col items-center justify-center text-center p-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <BrainCircuit className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Mentor</h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  Paste a problem on the left to get a FAANG-level structured explanation.
                </p>
              </div>
            )}

            {isLoading && (
              <div className="space-y-6 animate-pulse">
                <div className="h-8 bg-gray-200 rounded-lg w-1/3" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                  <div className="h-4 bg-gray-200 rounded w-4/6" />
                </div>
                <div className="h-48 bg-gray-200 rounded-2xl w-full" />
                <div className="h-32 bg-gray-200 rounded-2xl w-full" />
              </div>
            )}

            {error && (
              <div className="p-6 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm">
                <p className="font-semibold mb-1">Error Generating Response</p>
                <p>{error}</p>
              </div>
            )}

            {response && (
              <div ref={responseRef} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50 sticky top-0 z-10">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Mentor Analysis</span>
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-white rounded-lg transition-colors text-gray-500 hover:text-indigo-600"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                

{/* Tabs */}
<div className="flex border-b border-gray-100 bg-white">
  {(["approach", "code", "complexity"] as const).map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 text-sm font-medium capitalize transition-all ${
        activeTab === tab
          ? "text-indigo-600 border-b-2 border-indigo-600"
          : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {tab}
    </button>
  ))}
</div>

<div className="p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-16rem)]">
                  <div className="prose prose-indigo prose-sm max-w-none 
                    prose-headings:font-semibold prose-headings:tracking-tight
                    prose-h2:text-xl prose-h2:border-b prose-h2:pb-2 prose-h2:mt-8
                    prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-[#1e1e1e] prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-4
                    prose-ul:list-disc prose-ol:list-decimal
                    text-gray-700 leading-relaxed">
                    <ReactMarkdown>
  {getSection(activeTab)}
</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-12 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-400">
          Designed for elite interview preparation. Powered by Gemini 3.1 Pro.
        </p>
      </footer>
    </div>
  );
}
