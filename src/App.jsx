import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginHero from './components/LoginHero';
import Dashboard from './components/Dashboard';
import PeopleModule from './components/PeopleModule';
import CoreModule from './components/CoreModule';
import SalesModule from './components/SalesModule';
import LeaveModule from './components/LeaveModule';
import PPRModule from './components/PPRModule';

function App() {
  const [route, setRoute] = useState('login'); // 'login' | 'dashboard' | module keys

  const page = (key, node) => (
    <motion.div key={key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
      {node}
    </motion.div>
  );

  return (
    <div className="font-sans min-h-screen">
      <AnimatePresence mode="wait">
        {route === 'login' && page('login', <LoginHero onLogin={() => setRoute('dashboard')} />)}
        {route === 'dashboard' && page(
          'dashboard',
          <Dashboard
            onOpenPeople={() => setRoute('people')}
            onOpenCore={() => setRoute('core')}
            onOpenSales={() => setRoute('sales')}
            onOpenLeave={() => setRoute('leave')}
            onOpenPPR={() => setRoute('ppr')}
          />
        )}
        {route === 'people' && page('people', <PeopleModule onBack={() => setRoute('dashboard')} />)}
        {route === 'core' && page('core', <CoreModule onBack={() => setRoute('dashboard')} />)}
        {route === 'sales' && page('sales', <SalesModule onBack={() => setRoute('dashboard')} />)}
        {route === 'leave' && page('leave', <LeaveModule onBack={() => setRoute('dashboard')} />)}
        {route === 'ppr' && page('ppr', <PPRModule onBack={() => setRoute('dashboard')} />)}
      </AnimatePresence>
    </div>
  );
}

export default App;
