
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [role, setRole] = useState<UserRole>(UserRole.CITIZEN);

  return (
    <div className="flex-1 flex flex-col p-6 bg-white overflow-y-auto">
      <div className="mt-12 mb-8 flex flex-col items-center">
        <div className="bg-primary/10 p-4 rounded-2xl mb-4">
          <span className="material-symbols-outlined text-4xl text-primary">account_balance</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Civic Connect</h1>
        <p className="text-slate-500 text-sm mt-1">Smart Reporting for KSEB & PWD</p>
      </div>

      <div className="mb-8">
        <div className="flex h-12 w-full items-center rounded-xl bg-slate-100 p-1">
          <button
            onClick={() => setRole(UserRole.CITIZEN)}
            className={`flex-1 flex items-center justify-center h-full rounded-lg text-sm font-semibold transition-all ${
              role === UserRole.CITIZEN ? 'bg-white shadow-sm text-primary' : 'text-slate-500'
            }`}
          >
            Citizen
          </button>
          <button
            onClick={() => setRole(UserRole.OFFICIAL)}
            className={`flex-1 flex items-center justify-center h-full rounded-lg text-sm font-semibold transition-all ${
              role === UserRole.OFFICIAL ? 'bg-white shadow-sm text-primary' : 'text-slate-500'
            }`}
          >
            Official
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 text-sm">Please sign in to your account</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">Email or Phone</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">alternate_email</span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                placeholder="name@example.com"
                type="text"
                defaultValue={role === UserRole.CITIZEN ? "rahul@citizen.com" : "admin@kseb.gov.in"}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Password</label>
              <button className="text-xs font-semibold text-primary">Forgot?</button>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
              <input
                className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                placeholder="••••••••"
                type="password"
                defaultValue="password123"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <span className="material-symbols-outlined text-xl">visibility</span>
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => onLogin(role)}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all"
        >
          <span>Sign In</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>

        <div className="flex flex-col items-center gap-2 mt-4">
          <button className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined text-3xl text-slate-600">face</span>
          </button>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Biometric Login</span>
        </div>
      </div>

      <div className="mt-auto pt-10 text-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-xs text-slate-400 uppercase tracking-widest px-2">New Here?</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>
        <button className="text-slate-900 font-bold text-sm hover:underline">
          Create a {role === UserRole.CITIZEN ? 'Citizen' : 'Official'} Account
        </button>
      </div>
      <div className="w-32 h-1.5 bg-slate-900/10 rounded-full mx-auto mt-4"></div>
    </div>
  );
};

export default Login;
