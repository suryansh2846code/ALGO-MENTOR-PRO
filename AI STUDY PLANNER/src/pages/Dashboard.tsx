import React from 'react';
import { LayoutDashboard, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
        <div className="text-sm text-slate-500">Welcome back, Student!</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<CheckCircle className="text-emerald-500" />} label="Tasks Completed" value="24" trend="+12% this week" />
        <StatCard icon={<Clock className="text-indigo-500" />} label="Study Hours" value="12.5h" trend="+2h today" />
        <StatCard icon={<TrendingUp className="text-amber-500" />} label="Current Streak" value="5 Days" trend="Keep it up!" />
        <StatCard icon={<LayoutDashboard className="text-rose-500" />} label="Active Plans" value="2" trend="1 ending soon" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Tasks */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Upcoming Tasks</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Advanced Calculus - Chapter {i}</div>
                    <div className="text-xs text-slate-500">Today at 2:00 PM • 45 mins</div>
                  </div>
                </div>
                <button className="text-indigo-600 font-semibold text-sm hover:underline">Start</button>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Subject Progress</h2>
          <div className="space-y-6">
            <ProgressItem label="Mathematics" progress={75} color="bg-indigo-500" />
            <ProgressItem label="Physics" progress={45} color="bg-emerald-500" />
            <ProgressItem label="Computer Science" progress={90} color="bg-amber-500" />
            <ProgressItem label="History" progress={30} color="bg-rose-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 rounded-lg bg-slate-50">{icon}</div>
      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{trend}</span>
    </div>
    <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
);

const ProgressItem = ({ label, progress, color }: any) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="text-slate-500">{progress}%</span>
    </div>
    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

export default Dashboard;
