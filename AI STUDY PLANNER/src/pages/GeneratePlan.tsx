import React from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';

const GeneratePlan = () => {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate AI generation
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Generate Your AI Study Plan</h1>
        <p className="text-slate-600">Tell us what you're studying, and we'll create the perfect schedule for you.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subjects to Study</label>
                <input 
                  type="text" 
                  placeholder="e.g. Calculus, Organic Chemistry"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Target Exam Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Daily Study Hours</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                  <option>1-2 hours</option>
                  <option>3-4 hours</option>
                  <option>5-6 hours</option>
                  <option>8+ hours (Intensive)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Difficulty Level</label>
                <div className="flex gap-4">
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <label key={level} className="flex-1">
                      <input type="radio" name="difficulty" className="hidden peer" defaultChecked={level === 'Intermediate'} />
                      <div className="text-center py-3 rounded-xl border border-slate-200 peer-checked:border-indigo-600 peer-checked:bg-indigo-50 peer-checked:text-indigo-600 cursor-pointer transition-all text-sm font-medium">
                        {level}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Additional Notes (Optional)</label>
              <textarea 
                rows={4}
                placeholder="Any specific topics you want to focus on or avoid?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Generating Your Plan...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generate Study Plan
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="bg-slate-50 p-6 border-t border-slate-100">
          <div className="flex items-start gap-3 text-sm text-slate-500">
            <Sparkles className="text-indigo-500 shrink-0" size={18} />
            <p>Our AI analyzes your subjects and difficulty level to create a scientifically-backed study schedule using active recall and spaced repetition principles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePlan;
