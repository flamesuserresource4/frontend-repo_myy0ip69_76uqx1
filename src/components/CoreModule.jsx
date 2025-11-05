import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Workflow, Users, Building2, ServerCog, ChevronRight, CheckCircle2 } from 'lucide-react';

const flows = [
  {
    key: 'org-setup',
    title: 'Organization Setup',
    icon: Building2,
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    steps: [
      'Add company profile and branding',
      'Configure business units and locations',
      'Define working calendars and timezones',
      'Upload legal and compliance docs'
    ],
  },
  {
    key: 'roles-perms',
    title: 'Roles & Permissions',
    icon: ShieldCheck,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    steps: [
      'Create roles (Admin, HR, Sales, Finance)',
      'Assign granular permissions per module',
      'Set data visibility rules',
      'Enable MFA and session policies'
    ],
  },
  {
    key: 'integrations',
    title: 'Integrations',
    icon: ServerCog,
    gradient: 'from-amber-400 via-orange-500 to-red-600',
    steps: [
      'Connect email and SSO providers',
      'Enable payroll and accounting sync',
      'Set up webhooks for events',
      'Verify data pipelines and mappings'
    ],
  },
  {
    key: 'automation',
    title: 'Automation Workflows',
    icon: Workflow,
    gradient: 'from-sky-400 via-indigo-500 to-purple-600',
    steps: [
      'Create triggers for lifecycle events',
      'Build conditional approvals',
      'Schedule recurring jobs',
      'Monitor execution logs'
    ],
  },
];

export default function CoreModule({ onBack }) {
  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-32 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
            Core Module
          </h2>
          <p className="text-slate-300">Configure your foundation: org, security, and automation</p>
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
                    <CheckCircle2 size={18} className="mt-0.5 text-cyan-300" />
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 inline-flex items-center gap-1 text-cyan-300 hover:text-white transition">
                Open workflow <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
