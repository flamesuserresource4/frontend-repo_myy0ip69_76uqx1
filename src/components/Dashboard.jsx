import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, ShoppingCart, Calendar, Shield, MessageCircle } from 'lucide-react';
import ChatAssistant from './ChatAssistant';

const cards = [
  { key: 'core', title: 'Core Module', icon: Shield, gradient: 'from-cyan-400 via-blue-500 to-indigo-600' },
  { key: 'people', title: 'People Module', icon: Users, gradient: 'from-fuchsia-400 via-violet-500 to-indigo-600' },
  { key: 'sales', title: 'Sales Module', icon: ShoppingCart, gradient: 'from-amber-400 via-pink-500 to-rose-600' },
  { key: 'leave', title: 'Leave Module', icon: Calendar, gradient: 'from-emerald-400 via-teal-500 to-cyan-600' },
  { key: 'ppr', title: 'PPR Module', icon: Layers, gradient: 'from-sky-400 via-indigo-500 to-purple-600' },
];

export default function Dashboard({ onOpenPeople }) {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-8">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
            Welcome to your ERP
          </h1>
          <p className="text-slate-300">Choose a module to get started</p>
        </div>

        <button
          onClick={() => setChatOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-slate-200 hover:bg-white/10 transition"
        >
          <MessageCircle size={18} className="text-cyan-400" />
          Assistant
        </button>
      </header>

      <main className="relative z-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <motion.button
              key={c.key}
              onClick={() => c.key === 'people' ? onOpenPeople?.() : null}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-xl`}
            >
              <div className={`absolute -right-24 -top-24 h-60 w-60 rounded-full bg-gradient-to-tr ${c.gradient} opacity-20 blur-3xl`}></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className={`rounded-xl p-3 bg-gradient-to-tr ${c.gradient} text-white shadow-lg`}>{<c.icon />}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                  <p className="text-slate-300 text-sm max-w-sm">
                    {c.key === 'people' ? 'Onboard, manage, and celebrate your team with elegance.' :
                     c.key === 'core' ? 'Organization settings, permissions, and platform control.' :
                     c.key === 'sales' ? 'Quotes, deals, and revenue pipelines with insights.' :
                     c.key === 'leave' ? 'Leave policies, requests, and approvals in one spot.' :
                     'Plan, perform, and review cycles streamlined.'}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </main>

      <ChatAssistant open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
