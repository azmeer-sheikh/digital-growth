import { Calendar, DollarSign, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Investment() {
  const phases = [
    {
      phase: 'Phase 1: Setup & Web Revamp',
      duration: 'Month 1',
      investment: '$2,500',
      highlight: true
    },
    {
      phase: 'Phase 2: Execution & Scaling',
      duration: 'Months 2–6',
      investment: '$1,100 / month',
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-xs">Investment & Timeline</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4 text-slate-900">
            Clear, Transparent Pricing
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            Structured investment plan designed for sustainable growth and measurable results
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl border ${
                  phase.highlight 
                    ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 shadow-sm' 
                    : 'border-slate-200 bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className={`w-5 h-5 ${phase.highlight ? 'text-orange-600' : 'text-slate-600'}`} />
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{phase.duration}</span>
                </div>
                <h3 className="text-base font-bold mb-3 text-slate-900">{phase.phase}</h3>
                <div className="flex items-baseline gap-1">
                  <DollarSign className={`w-5 h-5 ${phase.highlight ? 'text-orange-600' : 'text-slate-600'}`} />
                  <span className={`text-2xl font-bold ${phase.highlight ? 'text-orange-600' : 'text-slate-900'}`}>
                    {phase.investment}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-[2px] shadow-lg"
          >
            <div className="bg-white rounded-[10px] p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Total 6-Month Commitment</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      $8,000
                    </span>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-green-50 px-5 py-2.5 rounded-full border border-green-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-700 text-sm">Best Value</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}