import { Globe, Mic, Code, Brain } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Search & Directory Dominance',
      features: [
        '350+ Global Directories: Manual and automated listing across high-authority business directories to build "NAP" consistency and backlink equity',
        'Google Business Profile (GMB) Mastery: Complete optimization including weekly posts, photo updates, and review management to secure the "Local 3-Pack"'
      ]
    },
    {
      icon: Mic,
      title: 'Multi-Platform & Voice Integration',
      features: [
        'Universal Search Integration: Indexed and optimized across Google, Bing, MSN, and Safari',
        'Voice Search Optimization: Structured data for Voice AI (Siri, Alexa, Google Assistant) to appear in "near me" queries'
      ]
    },
    {
      icon: Code,
      title: 'Advanced Web SEO & Infrastructure',
      features: [
        'Full Website Revamp/Enhancement: Complete UI/UX overhaul ensuring mobile-first, lightning-fast, conversion-optimized experience',
        'On-Page & Technical SEO: Keyword mapping, metadata optimization, and schema markup for improved organic rankings'
      ]
    },
    {
      icon: Brain,
      title: 'AI-Driven Analytics & Reporting',
      features: [
        'AI Reporting Suite: Automated, real-time dashboards tracking rankings, traffic sources, and lead conversions',
        'Predictive Insights: Monthly deep-dives using AI to identify emerging search trends in your industry'
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
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-xs">Scope of Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4 text-slate-900">
            Complete Digital Transformation
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            Four pillars of excellence working together to maximize your online visibility and ROI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group"
            >
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-5">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-lg shadow-lg"
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex gap-3"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2"></div>
                      <p className="text-sm text-slate-700 leading-relaxed">{feature}</p>
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