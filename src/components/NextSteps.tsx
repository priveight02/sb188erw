import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '../data/nextSteps';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const floatingAnimation = {
  y: [-5, 5],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

export function NextSteps() {
  return (
    <div className="bg-gradient-to-b from-red-50 via-white to-red-50 py-24 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-red-100/20 to-red-200/20 blur-3xl"
            style={{
              width: `${Math.random() * 500 + 300}px`,
              height: `${Math.random() * 500 + 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-center mb-6 text-red-900 tracking-tight"
          animate={{ scale: [0.98, 1], opacity: [0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Your Success Journey
        </motion.h2>
        <motion.p 
          className="text-xl text-red-700/90 text-center max-w-3xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We've crafted a seamless onboarding experience to ensure your transition to marketing excellence is smooth and efficient. Here's your roadmap to success:
        </motion.p>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 35px -5px rgb(0 0 0 / 0.05), 0 10px 15px -5px rgb(0 0 0 / 0.1)"
              }}
              className="bg-white/90 p-8 rounded-2xl border border-red-100/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.div 
                className="flex items-center gap-4 mb-6"
                animate={floatingAnimation}
              >
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-red-600 tracking-wide uppercase">{step.timing}</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-red-900">{step.title}</h3>
              <p className="text-red-700/80 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}