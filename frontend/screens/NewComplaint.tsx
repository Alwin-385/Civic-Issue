
import React, { useState } from 'react';
import { Header } from '../components/Layout';
import { Department } from '../types';

interface NewComplaintProps {
  onBack: () => void;
}

const NewComplaint: React.FC<NewComplaintProps> = ({ onBack }) => {
  const [category, setCategory] = useState<Department>(Department.KSEB);
  const [description, setDescription] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto pb-32">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-white/80 px-4 py-4 backdrop-blur-md border-b border-slate-100">
        <button onClick={onBack} className="flex items-center text-primary font-medium">
          <span className="material-symbols-outlined mr-1">close</span>
          <span>Cancel</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">New Complaint</h1>
        <div className="w-16"></div>
      </header>

      <div className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
          <div className="h-1.5 flex-1 rounded-full bg-slate-200"></div>
          <div className="h-1.5 flex-1 rounded-full bg-slate-200"></div>
        </div>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Step 1 of 3: Details</p>
      </div>

      <main className="flex flex-col px-4 space-y-6">
        <section>
          <h2 className="mb-3 text-sm font-bold text-slate-800 uppercase tracking-wide">Select Category</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setCategory(Department.KSEB)}
              className={`flex flex-col items-center justify-center rounded-xl border-2 p-4 transition-all ${
                category === Department.KSEB ? 'border-primary bg-primary/5' : 'border-slate-100 bg-slate-50'
              }`}
            >
              <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${category === Department.KSEB ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-600'}`}>
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <span className="text-sm font-bold">KSEB</span>
              <span className="text-[10px] text-slate-500">Electricity</span>
            </button>
            <button
              onClick={() => setCategory(Department.PWD)}
              className={`flex flex-col items-center justify-center rounded-xl border-2 p-4 transition-all ${
                category === Department.PWD ? 'border-primary bg-primary/5' : 'border-slate-100 bg-slate-50'
              }`}
            >
              <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${category === Department.PWD ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-600'}`}>
                <span className="material-symbols-outlined text-3xl">construction</span>
              </div>
              <span className="text-sm font-bold">PWD</span>
              <span className="text-[10px] text-slate-500">Roads</span>
            </button>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold text-slate-800 uppercase tracking-wide">Issue Description</h2>
          <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
            <textarea 
              className="w-full border-0 bg-transparent p-4 text-base focus:ring-0 placeholder:text-slate-400" 
              placeholder="Describe the problem in detail (e.g., hanging wire, large pothole near main junction)..." 
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Upload Proof</h2>
            <span className="text-xs text-slate-500">Max 3 photos</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-500">
              <span className="material-symbols-outlined text-2xl">add_a_photo</span>
              <span className="mt-1 text-[10px] font-medium">Add Photo</span>
            </button>
            <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden shadow-sm group">
              <img className="h-full w-full object-cover" src="https://picsum.photos/seed/pothole/200/200" alt="Uploaded Proof" />
              <button className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Location Details</h2>
            <button className="text-xs font-semibold text-primary">Pin Manually</button>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <img className="h-full w-full object-cover" src="https://picsum.photos/seed/location/400/200" alt="Map View" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-md">location_on</span>
                <div className="mt-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold shadow-sm backdrop-blur-sm">Current Location</div>
              </div>
            </div>
            <button className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-slate-700">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
          <div className="mt-3 flex items-start gap-2">
            <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">near_me</span>
            <p className="text-xs text-slate-600">123 Civil Line Road, Palarivattom, Kochi - 682025</p>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 z-40 w-full max-w-md bg-white/95 p-4 pb-8 backdrop-blur-xl border-t border-slate-100">
        <button 
          onClick={onBack}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-center text-base font-bold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          <span>Submit Complaint</span>
          <span className="material-symbols-outlined text-lg">send</span>
        </button>
        <p className="mt-3 text-center text-[10px] text-slate-400">By submitting, you agree to our Terms of Service</p>
      </footer>
    </div>
  );
};

export default NewComplaint;
