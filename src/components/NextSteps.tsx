import { Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function NextSteps() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 font-semibold uppercase tracking-wider text-xs">Next Steps</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-base text-slate-300 mb-10 leading-relaxed">
              To proceed with this digital growth strategy, we will schedule a kickoff call to finalize website design preferences and access the necessary business credentials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-orange-500 to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg"
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <p className="text-sm text-slate-300 mb-3">Discuss your project goals and preferences</p>
              <button className="text-orange-400 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-orange-500 to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-slate-300 mb-3">Get answers to your questions</p>
              <button className="text-orange-400 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                Contact <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-bold text-sm hover:shadow-xl transition-all shadow-lg inline-flex items-center gap-3"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}