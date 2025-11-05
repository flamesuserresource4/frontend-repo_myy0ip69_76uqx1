import { motion } from 'framer-motion';
import { ShoppingCart, FileText, DollarSign, Users2, BarChart3, ChevronRight, CheckCircle2 } from 'lucide-react';

const flows = [
  {
    key: 'lead-intake',
    title: 'Lead Intake',
    icon: Users2,
    gradient: 'from-fuchsia-400 via-violet-500 to-indigo-600',
    steps: [
      'Capture leads from forms and imports',
      'Auto-assign via round-robin rules',
      'Enrich with company and contact data',
      'Set follow-up reminders'
    ],
  },
  {
    key: 'quote-proposal',
    title: 'Quotes & Proposals',
    icon: FileText,
    gradient: 'from-amber-400 via-pink-500 to-rose-600',
    steps: [
      'Generate quotes from product catalog',
      'Apply tiered discounts and taxes',
      'Send e-sign ready proposals',
      'Track views and engagement'
    ],
  },
  {
    key: 'deal-pipeline',
    title: 'Deal Pipeline',
    icon: BarChart3,
    gradient: 'from-sky-400 via-indigo-500 to-purple-600',
    steps: [
      'Kanban stages: Qualify → Demo → Negotiate → Won',
      'Forecast by probability and ARR',
      'Collaborate with comments and mentions',
      'Set win plans and tasks'
    ],
  },
  {
    key: 'billing',
    title: 'Billing & Invoicing',
    icon: DollarSign,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    steps: [
      'Create invoices from closed-won deals',
      'Schedule subscriptions and renewals',
      'Sync with accounting',
      'Send payment links and receipts'
    ],
  },
];

export default function SalesModule({ onBack }) {
  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute top-32 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-fuchsia-200 to-pink-200 bg-clip-text text-transparent">Sales Module</h2>
          <p className="text-slate-300">From lead to revenue with clarity and speed</p>
        </div>
        <button onClick={onBack} className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-slate-200 hover:bg-white/10 transition">Back to Dashboard</button>
      </header>

      <main className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {flows.map((f, idx) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx }}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
          >
            <div className={`absolute -right-24 -top-24 h-60 w-60 rounded-full bg-gradient-to-tr ${f.gradient} opacity-20 blur-3xl`} />
            <div className="relative z-10">
              <div className={`inline-flex items-center gap-2 rounded-xl p-3 bg-gradient-to-tr ${f.gradient} text-white shadow-lg`}>
                {<f.icon />}
                <span className="font-semibold">{f.title}</span>
              </div>
              <ul className="mt-4 space-y-3">
                {f.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-200">
                    <CheckCircle2 size={18} className="mt-0.5 text-pink-300" />
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 inline-flex items-center gap-1 text-pink-300 hover:text-white transition">
                Open workflow <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
