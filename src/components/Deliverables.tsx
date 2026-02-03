import { Rocket, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Deliverables() {
  const deliverables = [
    {
      icon: Rocket,
      title: 'Month 1 Launch',
      items: [
        'New/Enhanced website launch',
        '350 directory submissions initiated',
        'Complete GMB setup and optimization'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Ongoing Optimization',
      items: [
        'Bi-weekly performance audits',
        'Voice integration updates',
        'Continuous SEO content optimization'
      ]
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-xs">Key Deliverables</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4 text-slate-900">
            What You'll Receive
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            Comprehensive deliverables designed to ensure your success from day one
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {deliverables.map((deliverable, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-5">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-lg shadow-lg"
                  >
                    <deliverable.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">{deliverable.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {deliverable.items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}