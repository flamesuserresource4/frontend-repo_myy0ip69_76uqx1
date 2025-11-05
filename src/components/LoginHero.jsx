import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Shield, CheckCircle2, User, LogIn } from 'lucide-react';

export default function LoginHero({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin?.();
    }, 900);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Iridescent gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-cyan-400/20 via-indigo-500/20 to-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-fuchsia-400/10 via-violet-500/10 to-blue-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="text-center lg:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent"
            >
              Elite ERP Portal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-slate-200/90 text-lg max-w-xl mx-auto lg:mx-0"
            >
              A premium, futuristic experience for managing your enterprise with precision and style.
            </motion.p>
            <div className="flex items-center justify-center lg:justify-start gap-6 text-slate-300/90">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-cyan-400" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-indigo-400" />
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-fuchsia-400" />
                <span>Personalized</span>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-40 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="mb-6">
              <h2 className="text-white text-xl font-semibold">Welcome back</h2>
              <p className="text-slate-300 text-sm">Sign in to continue to your workspace</p>
            </div>

            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full mb-4 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />

            <label className="block text-sm text-slate-300 mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mb-6 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 px-4 py-3 font-semibold text-white shadow-lg hover:shadow-cyan-500/25 active:scale-95 transition"
            >
              <LogIn size={18} />
              {loading ? 'Signing in…' : 'Sign in'}
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              By continuing you agree to our Terms & Privacy.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
