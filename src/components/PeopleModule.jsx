import { motion } from 'framer-motion';
import { ChevronRight, Users, UserPlus, UserMinus, FileText, FileSignature } from 'lucide-react';

const items = [
  { key: 'onboarding', title: 'Onboarding', desc: 'Smooth welcomes, accounts, and access provisioning.', icon: UserPlus, gradient: 'from-emerald-400 via-teal-500 to-cyan-600' },
  { key: 'offboarding', title: 'Offboarding', desc: 'Graceful exits with compliance and security.', icon: UserMinus, gradient: 'from-rose-400 via-pink-500 to-fuchsia-600' },
  { key: 'directory', title: 'Employee Directory', desc: 'Search and connect with teammates instantly.', icon: Users, gradient: 'from-sky-400 via-indigo-500 to-purple-600' },
  { key: 'applications', title: 'Application Module', desc: 'Track candidates from apply to offer.', icon: FileText, gradient: 'from-amber-400 via-orange-500 to-red-600' },
  { key: 'contracts', title: 'Contracts & Offer Letters', desc: 'Generate and manage documents securely.', icon: FileSignature, gradient: 'from-cyan-400 via-blue-500 to-indigo-600' },
];

export default function PeopleModule({ onBack }) {
  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-32 right-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-20 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
            People Module
          </h2>
          <p className="text-slate-300">Human-centric tools to empower your organization</p>
        </div>
        <button
          onClick={onBack}
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-slate-200 hover:bg-white/10 transition"
        >
          Back to Dashboard
        </button>
      </header>

      <main className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx }}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
          >
            <div className={`absolute -right-24 -top-24 h-60 w-60 rounded-full bg-gradient-to-tr ${item.gradient} opacity-20 blur-3xl`} />
            <div className="relative z-10 flex items-start gap-4">
              <div className={`rounded-xl p-3 bg-gradient-to-tr ${item.gradient} text-white shadow-lg`}>
                {<item.icon />}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-slate-300 text-sm max-w-sm">{item.desc}</p>
                <button className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition">
                  Explore
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
