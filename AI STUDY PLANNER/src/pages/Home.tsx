import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, BarChart2, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
              >
                Master Your Studies with <span className="text-indigo-600">AI Precision</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 mb-8 max-w-2xl"
              >
                Stop overwhelming yourself. Get a personalized, AI-generated study schedule that adapts to your pace and goals.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  to="/generate" 
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
                >
                  Generate Study Plan <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/login" 
                  className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Get Started Free
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full"></div>
                <img 
                  src="https://picsum.photos/seed/study/800/600" 
                  alt="Student studying" 
                  className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our AI-powered tools help you stay organized, focused, and ahead of your curriculum.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-amber-500" />}
              title="Instant AI Scheduling"
              description="Input your subjects and deadlines, and our AI builds a balanced daily schedule in seconds."
            />
            <FeatureCard 
              icon={<BarChart2 className="text-emerald-500" />}
              title="Progress Tracking"
              description="Visualize your learning journey with detailed analytics and streak counters."
            />
            <FeatureCard 
              icon={<Calendar className="text-indigo-500" />}
              title="Adaptive Planning"
              description="Missed a session? No problem. The AI automatically adjusts your plan to keep you on track."
            />
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-indigo-100">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-indigo-100">Study Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-100">Grade Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-indigo-100">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to transform your study habits?</h2>
            <p className="text-slate-600 mb-10 text-lg">Join thousands of students who are achieving their goals with AI Study Planner.</p>
            <Link 
              to="/signup" 
              className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all inline-flex items-center gap-2"
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
