import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import GeneratePlan from './pages/GeneratePlan';

// Placeholder components for missing pages
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Trophy, Target, Flame } from 'lucide-react';

const data = [
  { name: 'Mon', hours: 4 },
  { name: 'Tue', hours: 3 },
  { name: 'Wed', hours: 5 },
  { name: 'Thu', hours: 2 },
  { name: 'Fri', hours: 6 },
  { name: 'Sat', hours: 4 },
  { name: 'Sun', hours: 3 },
];

const Progress = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Progress Tracker</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-indigo-600 rounded-2xl p-8 text-white flex items-center gap-6 shadow-lg shadow-indigo-200">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Flame size={32} />
          </div>
          <div>
            <div className="text-3xl font-bold">5 Days</div>
            <div className="text-indigo-100">Current Streak</div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Trophy size={32} />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">12</div>
            <div className="text-slate-500">Badges Earned</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
            <Target size={32} />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">85%</div>
            <div className="text-slate-500">Goal Completion</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-8">Study Hours (Weekly)</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="hours" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-8">Focus Score</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="hours" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = () => <div className="container mx-auto p-12 text-center"><h1>Login / Signup (Scaffold)</h1></div>;
const Profile = () => <div className="container mx-auto p-12 text-center"><h1>User Profile (Scaffold)</h1></div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generate" element={<GeneratePlan />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
