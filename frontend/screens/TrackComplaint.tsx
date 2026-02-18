
import React from 'react';
import { Header } from '../components/Layout';
import { IssueStatus } from '../types';

interface TrackComplaintProps {
  onBack: () => void;
}

const TrackComplaint: React.FC<TrackComplaintProps> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light overflow-y-auto">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 rounded-full hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">Track Complaints</h1>
        </div>
        <button className="p-2 rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <div className="px-4 py-4 space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input className="w-full pl-10 pr-4 py-2.5 bg-white border-none rounded-xl shadow-sm text-sm" placeholder="Search ID or Issue" type="text" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">KSEB-99231</span>
              <span className="text-xs text-slate-500">2h ago</span>
            </div>
            <h3 className="text-lg font-bold">Broken Power Line - Street 4</h3>
            <p className="text-sm text-slate-500 mt-1">Reported near Central Park entrance.</p>
          </div>

          <div className="p-4 bg-slate-50/50">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-4">Status Timeline</h4>
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-white flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-green-600">Verified & Acknowledged</span>
                  <span className="text-xs text-slate-500">Oct 24, 09:15 AM</span>
                  <p className="text-xs mt-1 text-slate-600 italic">"Inspector confirmed issue via site visit."</p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white flex items-center justify-center z-10 animate-pulse">
                  <span className="material-symbols-outlined text-white text-[12px]">engineering</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">Technician Dispatched</span>
                  <span className="text-xs text-slate-500">Oct 24, 11:30 AM</span>
                  <div className="mt-2 flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200">
                    <img className="w-8 h-8 rounded-full object-cover" src="https://picsum.photos/seed/tech/40/40" alt="Ravi" />
                    <div>
                      <p className="text-[10px] font-bold leading-none">Ravi Kumar</p>
                      <p className="text-[9px] text-slate-500">Field Engineer • ID 442</p>
                    </div>
                    <button className="ml-auto p-1.5 bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-[16px]">call</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-slate-200 border-4 border-white z-10"></div>
                <div className="flex flex-col opacity-50">
                  <span className="text-sm font-bold">Resolution Pending</span>
                  <span className="text-xs">Est. completion by 5 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest pt-2">Other Reports</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
            <span className="material-symbols-outlined text-[28px]">road</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="text-[10px] font-bold text-slate-400">#PWD-77410</span>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Acknowledged</span>
            </div>
            <h4 className="font-bold text-sm">Pothole Repair - MG Road</h4>
            <p className="text-xs text-slate-500">Reported Yesterday</p>
          </div>
          <span className="material-symbols-outlined text-slate-300">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default TrackComplaint;
