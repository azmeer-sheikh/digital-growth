import { Target, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

export function Overview() {
  const features = [
    {
      icon: Target,
      title: 'Multi-Platform Integration',
      description: 'Seamless presence across all major search engines and platforms'
    },
    {
      icon: Zap,
      title: 'Aggressive Local SEO',
      description: 'Dominate local search with optimized Google Business Profile'
    },
    {
      icon: BarChart3,
      title: 'High-Converting Architecture',
      description: 'Web infrastructure designed for maximum conversion rates'
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
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-xs">Project Overview</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4 text-slate-900">
            Establish Dominant Online Presence
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            Our objective is to establish a dominant online presence through multi-platform integration, aggressive local SEO, and a high-converting web architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-orange-300 transition-all hover:shadow-lg group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-orange-500 to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all"
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}