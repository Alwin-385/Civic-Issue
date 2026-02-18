
import React from 'react';
import { Header } from '../components/Layout';

interface ManageStaffProps {
  onBack: () => void;
}

const ManageStaff: React.FC<ManageStaffProps> = ({ onBack }) => {
  const STAFF_MEMBERS = [
    { id: 'KSEB-492', name: 'Arjun Kumar', role: 'Senior Lineman', workload: 3, max: 5, status: 'Online', location: 'Sector 2', avatar: 'https://picsum.photos/seed/arjun/100/100' },
    { id: 'KSEB-102', name: 'Meera Nair', role: 'Field Technician', workload: 5, max: 5, status: 'Busy', location: 'Olavakkode', avatar: 'https://picsum.photos/seed/meera/100/100' },
    { id: 'KSEB-331', name: 'Rahul Varma', role: 'Maintenance Crew', workload: 1, max: 5, status: 'Online', location: 'Malampuzha', avatar: 'https://picsum.photos/seed/rahul/100/100' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-background-light overflow-hidden pb-24">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-4 pt-6 pb-2 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="text-primary text-2xl">
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <h1 className="text-xl font-bold tracking-tight">Manage Staff</h1>
          </div>
          <button className="bg-primary text-white p-2 rounded-full flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined">person_add</span>
          </button>
        </div>
        <div className="relative mb-4">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input className="w-full bg-slate-200/50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search staff by name or ID" type="text" />
        </div>
        <div className="flex bg-slate-200/50 p-1 rounded-xl mb-2">
          <button className="flex-1 bg-white shadow-sm py-1.5 rounded-lg text-sm font-semibold text-primary">KSEB Staff</button>
          <button className="flex-1 py-1.5 rounded-lg text-sm font-medium text-slate-500">PWD Staff</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Available Staff (12)</h3>
          <span className="text-xs text-slate-400">Last updated: Just now</span>
        </div>

        {STAFF_MEMBERS.map((staff) => (
          <div key={staff.id} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex gap-3">
                <div className="relative">
                  <img className="w-12 h-12 rounded-full object-cover" src={staff.avatar} alt={staff.name} />
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 ${staff.status === 'Online' ? 'bg-green-500' : 'bg-yellow-500'} border-2 border-white rounded-full`}></span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{staff.name}</h4>
                  <p className="text-xs text-slate-500">{staff.role} • ID: {staff.id}</p>
                </div>
              </div>
              <button className="text-primary text-sm font-semibold">Edit</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-lg text-slate-400">location_on</span>
                <span>{staff.location} Junction</span>
                <button className="ml-auto text-primary">
                  <span className="material-symbols-outlined text-lg">map</span>
                </button>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-500">Workload: {staff.workload}/{staff.max} Tasks</span>
                  <span className={staff.workload >= staff.max ? 'text-red-500 font-bold' : 'text-primary'}>
                    {staff.workload >= staff.max ? 'Max Capacity' : `${(staff.workload/staff.max) * 100}% Capacity`}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${staff.workload >= staff.max ? 'bg-red-500' : 'bg-primary'}`} 
                    style={{ width: `${(staff.workload/staff.max) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Live Geographic View</h3>
          <div className="relative w-full h-40 rounded-xl overflow-hidden border border-slate-200">
            <img className="w-full h-full object-cover opacity-80" src="https://picsum.photos/seed/geoview/400/200" alt="Map View" />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageStaff;
