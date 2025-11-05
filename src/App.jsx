import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginHero from './components/LoginHero';
import Dashboard from './components/Dashboard';
import PeopleModule from './components/PeopleModule';

function App() {
  const [route, setRoute] = useState('login'); // 'login' | 'dashboard' | 'people'

  return (
    <div className="font-sans min-h-screen">
      <AnimatePresence mode="wait">
        {route === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoginHero onLogin={() => setRoute('dashboard')} />
          </motion.div>
        )}

        {route === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <Dashboard onOpenPeople={() => setRoute('people')} />
          </motion.div>
        )}

        {route === 'people' && (
          <motion.div
            key="people"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <PeopleModule onBack={() => setRoute('dashboard')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
