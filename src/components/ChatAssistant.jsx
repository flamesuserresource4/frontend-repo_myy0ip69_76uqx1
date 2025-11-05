import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatAssistant({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I can help you navigate modules, find employees, and more.' },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { role: 'user', text: trimmed };
    setMessages((m) => [...m, userMsg]);

    // lightweight, frontend-only mock reply
    setTimeout(() => {
      let reply = "Got it. I can open modules or look up employees. Try: 'Open People module'.";
      if (/people/i.test(trimmed)) reply = 'Opening People module would be one click on the card on your dashboard.';
      if (/onboard/i.test(trimmed)) reply = 'Onboarding helps set up new hires with access, paperwork, and introductions.';
      setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    }, 600);

    setInput('');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed right-0 top-0 h-screen w-full sm:w-[420px] z-40 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl"
          aria-label="Chat Assistant"
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600" />
              <h3 className="text-white font-semibold">Assistant</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white transition"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 space-y-3 overflow-y-auto h-[calc(100vh-160px)]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-lg ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'
                      : 'bg-white/5 text-slate-200 border border-white/10'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything…"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <button
                onClick={handleSend}
                className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-cyan-500/25 active:scale-95 transition"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
