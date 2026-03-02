import React from 'react';
import { BookOpen, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <BookOpen size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">StudyPlannerAI</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering students worldwide with personalized AI-driven study solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/generate" className="hover:text-indigo-400 transition-colors">Study Plans</Link></li>
              <li><Link to="/progress" className="hover:text-indigo-400 transition-colors">Progress Tracker</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={18} />
              <span>support@studyplanner.ai</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AI Study Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
