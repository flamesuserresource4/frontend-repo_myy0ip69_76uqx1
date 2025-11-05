import { motion } from 'framer-motion';
import { Layers, Target, Medal, ClipboardCheck, LineChart, ChevronRight, CheckCircle2 } from 'lucide-react';

const flows = [
  {
    key: 'planning',
    title: 'Planning',
    icon: Target,
    gradient: 'from-sky-400 via-indigo-500 to-purple-600',
    steps: [
      'Define goals, OKRs, and metrics',
      'Set cycles and timelines',
      'Cascade objectives across teams',
      'Publish success criteria'
    ],
  },
  {
    key: 'perform',
    title: 'Perform',
    icon: Medal,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    steps: [
      'Track progress with check-ins',
      'Collect peer feedback',
      'Recognize achievements',
      'Identify blockers and support'
    ],
  },
  {
    key: 'review',
    title: 'Review',
    icon: ClipboardCheck,
    gradient: 'from-amber-400 via-orange-500 to-red-600',
    steps: [
      'Run calibration sessions',
      'Conduct manager reviews',
      'Compile performance summaries',
      'Decide on growth actions'
    ],
  },
  {
    key: 'insights',
    title: 'Insights',
    icon: LineChart,
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    steps: [
      'Analyze trends across cycles',
      'Spot top skills and gaps',
      'Measure fairness and bias',
      'Export reports to stakeholders'
    ],
  },
];

export default function PPRModule({ onBack }) {
  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-32 right-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-sky-200 to-indigo-200 bg-clip-text text-transparent">PPR Module</h2>
          <p className="text-slate-300">Plan, perform, and review with structured cycles</p>
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
                    <CheckCircle2 size={18} className="mt-0.5 text-sky-300" />
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 inline-flex items-center gap-1 text-sky-300 hover:text-white transition">
                Open workflow <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
