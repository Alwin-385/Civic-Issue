
import React, { useState, useEffect } from 'react';
import Login from './screens/Login';
import CitizenDashboard from './screens/CitizenDashboard';
import OfficialDashboard from './screens/OfficialDashboard';
import NewComplaint from './screens/NewComplaint';
import TrackComplaint from './screens/TrackComplaint';
import ManageStaff from './screens/ManageStaff';
import ManageComplaints from './screens/ManageComplaints';
import { UserRole } from './types';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [currentScreen, setCurrentScreen] = useState<string>('DASHBOARD');

  // Simple state-based routing
  const renderScreen = () => {
    if (!role) {
      return <Login onLogin={(selectedRole) => setRole(selectedRole)} />;
    }

    if (role === UserRole.CITIZEN) {
      switch (currentScreen) {
        case 'NEW_COMPLAINT':
          return <NewComplaint onBack={() => setCurrentScreen('DASHBOARD')} />;
        case 'TRACK_COMPLAINT':
          return <TrackComplaint onBack={() => setCurrentScreen('DASHBOARD')} />;
        case 'DASHBOARD':
        default:
          return <CitizenDashboard 
            onNavigate={(screen) => setCurrentScreen(screen)} 
            onLogout={() => setRole(null)} 
          />;
      }
    }

    if (role === UserRole.OFFICIAL) {
      switch (currentScreen) {
        case 'MANAGE_STAFF':
          return <ManageStaff onBack={() => setCurrentScreen('DASHBOARD')} />;
        case 'MANAGE_COMPLAINTS':
          return <ManageComplaints onBack={() => setCurrentScreen('DASHBOARD')} />;
        case 'DASHBOARD':
        default:
          return <OfficialDashboard 
            onNavigate={(screen) => setCurrentScreen(screen)} 
            onLogout={() => setRole(null)} 
          />;
      }
    }

    return <div>Unknown Screen</div>;
  };

return (
  <div className="min-h-screen bg-slate-50 flex justify-center">
    <div className="w-full max-w-7xl min-h-screen bg-white shadow-xl relative overflow-hidden flex flex-col">
      {renderScreen()}
    </div>
  </div>
);

};

export default App;
