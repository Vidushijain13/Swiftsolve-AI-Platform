import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Code, ShieldCheck } from 'lucide-react'

const WhyUs = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Speed to Market",
      description: "We deploy production-ready AI agents in weeks, not months. Our development cycle is engineered for rapid evolution."
    },
    {
      icon: Code,
      title: "Bespoke Engineering",
      description: "No templates. Every line of code is written specifically for your business logic, ensuring a unique competitive edge."
    },
    {
      icon: ShieldCheck,
      title: "Scalable Architecture",
      description: "Built on the MERN stack and AWS for infinite growth. Your infrastructure expands along with your intelligence."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="why-us" className="section-padding bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
            The Strategic <span className="text-swift-blue italic">Advantage</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Beyond automation, we provide the architectural foundation for the future of your enterprise.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {advantages.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-swift-blue/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-swift-blue/10 flex items-center justify-center text-swift-blue mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs
