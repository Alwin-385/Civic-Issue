
import React from 'react';
import { Header } from '../components/Layout';

interface ManageComplaintsProps {
  onBack: () => void;
}

const ManageComplaints: React.FC<ManageComplaintsProps> = ({ onBack }) => {
  const COMPLAINTS = [
    { id: 'KS-209', dept: 'KSEB', title: 'Fallen Power Line', location: 'MG Road, North Junction', severity: 'High', time: '14 mins ago', img: 'https://picsum.photos/seed/ks209/100/100' },
    { id: 'PW-882', dept: 'PWD', title: 'Large Pothole', location: 'Bypass Road, Exit 4', severity: 'Medium', time: '1 hour ago', img: 'https://picsum.photos/seed/pw882/100/100' },
    { id: 'KS-112', dept: 'KSEB', title: 'Street Light Blinking', location: 'Sector 4', severity: 'Low', time: '3 hours ago', img: 'https://picsum.photos/seed/ks112/100/100', status: 'In Progress', assigned: 'Rahul V.' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-background-light overflow-hidden">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md pt-6 px-4 pb-2 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="text-primary text-3xl">
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Manage Complaints</h1>
              <p className="text-xs text-slate-500">12 Pending • 48 Total Today</p>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
        <div className="relative mb-4">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input className="w-full rounded-xl border-none bg-slate-200/50 py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search by ID or Location..." type="text" />
        </div>
        <div className="flex p-1 bg-slate-200/50 rounded-xl mb-2">
          <button className="flex-1 py-1.5 text-sm font-semibold rounded-lg bg-white shadow-sm text-primary">All</button>
          <button className="flex-1 py-1.5 text-sm font-medium text-slate-500">KSEB</button>
          <button className="flex-1 py-1.5 text-sm font-medium text-slate-500">PWD</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-32">
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-full text-xs font-medium whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">filter_list</span> Status: Open
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium whitespace-nowrap">Severity: High</button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium whitespace-nowrap">Recent First</button>
        </div>

        {COMPLAINTS.map((complaint) => (
          <div key={complaint.id} className={`bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex gap-4 ${complaint.status ? 'opacity-75' : ''}`}>
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100">
              <img className="w-full h-full object-cover" src={complaint.img} alt={complaint.title} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${complaint.dept === 'KSEB' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                  {complaint.dept}
                </span>
                <div className="flex items-center gap-1">
                  {complaint.status ? (
                    <span className="text-[10px] font-bold text-primary uppercase">{complaint.status}</span>
                  ) : (
                    <>
                      <span className={`size-2 rounded-full ${complaint.severity === 'High' ? 'bg-red-500' : 'bg-orange-500'}`}></span>
                      <span className={`text-[10px] font-bold uppercase ${complaint.severity === 'High' ? 'text-red-500' : 'text-orange-500'}`}>{complaint.severity}</span>
                    </>
                  )}
                </div>
              </div>
              <h3 className="text-sm font-bold truncate">{complaint.title} #{complaint.id}</h3>
              <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">{complaint.assigned ? 'engineering' : 'location_on'}</span> 
                {complaint.assigned ? `Assigned: ${complaint.assigned}` : complaint.location}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">{complaint.time}</span>
                <button className={`text-xs font-bold ${complaint.status ? 'text-slate-400' : 'text-primary'} flex items-center gap-1`}>
                  {complaint.status ? 'View Details' : 'Review'} <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <div className="absolute bottom-24 left-0 right-0 h-16 bg-white border-t border-slate-200 p-4 flex items-center justify-between z-40">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">assignment_ind</span>
          <p className="text-xs font-medium">Quick Assign Pending (12)</p>
        </div>
        <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg">Assign All</button>
      </div>
    </div>
  );
};

export default ManageComplaints;
