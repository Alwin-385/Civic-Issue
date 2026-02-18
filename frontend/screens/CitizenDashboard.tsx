
import React from 'react';
import { Header, BottomNav } from '../components/Layout';

interface CitizenDashboardProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

const CitizenDashboard: React.FC<CitizenDashboardProps> = ({ onNavigate, onLogout }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light">
      <Header 
        title="Hello, Rahul"
        subtitle="Thiruvananthapuram, KL"
        actions={
          <button onClick={onLogout} className="p-2 text-slate-600 bg-slate-100 rounded-full">
            <span className="material-symbols-outlined">logout</span>
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6 pb-24">
        <section className="grid grid-cols-3 gap-3">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-primary font-bold text-2xl">4</span>
            <span className="text-primary/80 text-[10px] uppercase font-bold tracking-wider mt-1">Active</span>
          </div>
          <div className="bg-success/10 border border-success/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-success font-bold text-2xl">12</span>
            <span className="text-success/80 text-[10px] uppercase font-bold tracking-wider mt-1">Resolved</span>
          </div>
          <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-warning font-bold text-2xl">2</span>
            <span className="text-warning/80 text-[10px] uppercase font-bold tracking-wider mt-1">Pending</span>
          </div>
        </section>

        <section>
          <h2 className="text-slate-900 text-base font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => onNavigate('NEW_COMPLAINT')}
              className="bg-primary text-white rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
            >
              <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">add_circle</span>
              </div>
              <span className="text-sm font-semibold">Report Issue</span>
            </button>
            <button 
              onClick={() => onNavigate('TRACK_COMPLAINT')}
              className="bg-white border border-slate-200 text-slate-900 rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm active:scale-95 transition-transform"
            >
              <div className="size-10 bg-slate-100 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">track_changes</span>
              </div>
              <span className="text-sm font-semibold">Track Status</span>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-slate-900 text-base font-bold">Available Authorities</h2>
            <button className="text-primary text-sm font-medium">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            <div className="min-w-[140px] bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col items-center gap-3">
              <div className="size-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div className="text-center">
                <p className="font-bold text-sm">KSEB</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Electricity Board</p>
              </div>
            </div>
            <div className="min-w-[140px] bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col items-center gap-3">
              <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <div className="text-center">
                <p className="font-bold text-sm">PWD</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Public Works</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-slate-900 text-base font-bold">Recent Updates</h2>
            <button className="text-primary text-sm font-medium">History</button>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4">
              <div className="size-10 rounded-lg bg-success/10 flex items-center justify-center text-success shrink-0">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-slate-900">Issue Resolved</h3>
                  <span className="text-[10px] text-slate-400">2h ago</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">Broken streetlight fixed at MG Road junction.</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded text-slate-500 font-medium">#KSEB-8821</span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">KSEB</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-slate-900">Inspection Scheduled</h3>
                  <span className="text-[10px] text-slate-400">Yesterday</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">Field officer assigned for pothole repair on NH-66.</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded text-slate-500 font-medium">#PWD-9042</span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">PWD</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNav 
        activeTab="home"
        onTabChange={() => {}}
        tabs={[
          { id: 'home', label: 'Home', icon: 'home' },
          { id: 'reports', label: 'Reports', icon: 'description' },
          { id: 'map', label: 'Map', icon: 'map' },
          { id: 'settings', label: 'Settings', icon: 'settings' }
        ]}
        centerAction={
          <button 
            onClick={() => onNavigate('NEW_COMPLAINT')}
            className="size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 border-4 border-white"
          >
            <span className="material-symbols-outlined !text-3xl">add</span>
          </button>
        }
      />
    </div>
  );
};

export default CitizenDashboard;
