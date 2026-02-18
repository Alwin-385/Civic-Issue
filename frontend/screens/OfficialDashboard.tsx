
import React from 'react';
import { Header, BottomNav } from '../components/Layout';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const BAR_DATA = [
  { name: 'JAN', value: 40 },
  { name: 'FEB', value: 55 },
  { name: 'MAR', value: 45 },
  { name: 'APR', value: 70 },
  { name: 'MAY', value: 85 },
  { name: 'JUN', value: 60 },
];

const CATEGORY_DATA = [
  { name: 'KSEB', value: 65, color: '#196ee6' },
  { name: 'PWD', value: 25, color: '#07883b' },
  { name: 'Others', value: 10, color: '#e2e8f0' },
];

interface OfficialDashboardProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

const OfficialDashboard: React.FC<OfficialDashboardProps> = ({ onNavigate, onLogout }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light overflow-hidden">
      <Header 
        title="System Analytics"
        subtitle="Live Administrator View"
        actions={
          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button onClick={onLogout} className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        }
      />

      <main className="flex-1 overflow-y-auto pb-32">
        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-primary px-4 text-white text-sm font-semibold">Today</button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white border border-primary/20 px-4 text-[#4e6d97] text-sm">Last 7 Days</button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white border border-primary/20 px-4 text-[#4e6d97] text-sm">Monthly</button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white border border-primary/20 px-4 text-[#4e6d97] text-sm">Custom</button>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 mb-4">
          <div className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm border border-primary/5">
            <div className="flex items-center justify-between">
              <p className="text-[#4e6d97] text-[10px] font-semibold uppercase tracking-wider">Total Reports</p>
              <span className="material-symbols-outlined text-primary text-sm">description</span>
            </div>
            <p className="text-2xl font-bold text-[#0e131b]">1,482</p>
            <p className="text-[#07883b] text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +12.5%
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm border border-primary/5">
            <div className="flex items-center justify-between">
              <p className="text-[#4e6d97] text-[10px] font-semibold uppercase tracking-wider">Resolved</p>
              <span className="material-symbols-outlined text-[#07883b] text-sm">check_circle</span>
            </div>
            <p className="text-2xl font-bold text-[#0e131b]">942</p>
            <p className="text-[#07883b] text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +5.2%
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm border border-primary/5">
            <div className="flex items-center justify-between">
              <p className="text-[#4e6d97] text-[10px] font-semibold uppercase tracking-wider">Avg. Time</p>
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
            </div>
            <p className="text-2xl font-bold text-[#0e131b]">4.2h</p>
            <p className="text-[#e73908] text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_down</span> -0.8h
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm border border-primary/5">
            <div className="flex items-center justify-between">
              <p className="text-[#4e6d97] text-[10px] font-semibold uppercase tracking-wider">Critical Issues</p>
              <span className="material-symbols-outlined text-[#e73908] text-sm">warning</span>
            </div>
            <p className="text-2xl font-bold text-[#0e131b]">28</p>
            <p className="text-[#4e6d97] text-[10px]">Current active</p>
          </div>
        </div>

        <div className="px-4 mb-4">
          <div className="rounded-xl bg-white p-5 shadow-sm border border-primary/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#0e131b] text-lg font-bold">Monthly Complaints</h3>
              <button className="text-primary text-sm font-semibold">Details</button>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={BAR_DATA}>
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {BAR_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 5 ? '#196ee6' : '#196ee633'} />
                    ))}
                  </Bar>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#4e6d97' }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4">
          <div className="rounded-xl bg-white p-5 shadow-sm border border-primary/5">
            <h3 className="text-[#0e131b] text-lg font-bold mb-4">Issue Categories</h3>
            <div className="flex items-center gap-6">
              <div className="relative size-32 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={CATEGORY_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {CATEGORY_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-sm font-bold">Total</p>
                  <p className="text-[10px] text-[#4e6d97]">Issues</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {CATEGORY_DATA.map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="size-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                    <div>
                      <p className="text-xs font-bold">{cat.name} ({cat.value}%)</p>
                      <p className="text-[10px] text-[#4e6d97]">{idx === 0 ? 'Electricity/Lines' : idx === 1 ? 'Roads/Water' : 'Sanitation'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm border border-primary/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#0e131b] text-lg font-bold">High-Incident Zones</h3>
              <span className="material-symbols-outlined text-primary">map</span>
            </div>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-slate-100">
              <img 
                src="https://picsum.photos/seed/map/400/200" 
                className="absolute inset-0 w-full h-full object-cover opacity-60" 
                alt="City Map"
              />
              <div className="absolute top-1/2 left-1/3 size-12 rounded-full bg-red-500/40 blur-xl animate-pulse"></div>
              <div className="absolute top-1/4 right-1/4 size-16 rounded-full bg-red-600/30 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 backdrop-blur-sm p-2 shadow-sm">
                <p className="text-[10px] font-bold text-red-600">HOTSPOT DETECTED</p>
                <p className="text-xs font-medium text-slate-800">Sector 14 & Bypass Road</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] z-20">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 px-6 text-white shadow-xl shadow-primary/30 active:scale-95 transition-transform">
            <span className="material-symbols-outlined">file_export</span>
            <span className="font-bold">Export System Report</span>
          </button>
        </div>
      </main>

      <BottomNav 
        activeTab="analytics"
        onTabChange={(id) => {
          if (id === 'staff') onNavigate('MANAGE_STAFF');
          if (id === 'complaints') onNavigate('MANAGE_COMPLAINTS');
        }}
        tabs={[
          { id: 'complaints', label: 'Complaints', icon: 'dashboard_customize' },
          { id: 'analytics', label: 'Analytics', icon: 'monitoring' },
          { id: 'staff', label: 'Staff', icon: 'group' },
          { id: 'settings', label: 'Settings', icon: 'settings' }
        ]}
      />
    </div>
  );
};

export default OfficialDashboard;
