import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-700 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/10 rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-red-100 mb-8"
          animate={{ 
            textShadow: ["0 0 8px rgba(255,255,255,0.4)", "0 0 16px rgba(255,255,255,0.2)"],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Ready to Transform Your Marketing Strategy?
        </motion.h2>
        <motion.p 
          className="text-red-200 text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Sign your agreement now and let's begin your journey to marketing excellence together.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="bg-red-100 text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-white transition-all inline-flex items-center gap-2 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Sign Agreement</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
            <ArrowRight className="w-5 h-5 relative z-10" />
          </motion.button>
          <motion.button 
            className="border-2 border-red-100 text-red-100 px-8 py-3 rounded-full font-semibold hover:bg-red-800/30 transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Support</span>
            <motion.div
              className="absolute inset-0 bg-red-800/30 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}