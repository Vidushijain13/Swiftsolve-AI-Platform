import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Zap, Shield, Cpu, Code, BarChart } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, highlight = false }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className={`p-8 rounded-3xl transition-all duration-300 flex flex-col items-start gap-4 ${
      highlight ? 'bg-swift-blue/10 border border-swift-blue/30 shadow-2xl shadow-swift-blue/5' : 'bg-white/5 border border-white/10'
    }`}
  >
    <div className={`p-4 rounded-2xl ${highlight ? 'bg-swift-blue text-white' : 'bg-white/5 text-swift-blue'}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold font-display">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    <a 
      href="#contact" 
      className={`mt-4 text-sm font-semibold flex items-center gap-2 group ${highlight ? 'text-swift-blue' : 'text-white/80'}`}
    >
      Request Quote <Zap className="w-3 h-3 group-hover:fill-current group-hover:scale-125 transition-transform" />
    </a>
  </motion.div>
)

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbot Solutions",
      description: "Custom-trained LLM agents that handle customer support, sales qualification, and internal queries with human-like precision and 24/7 availability.",
      highlight: true
    },
    {
      icon: Cpu,
      title: "Process Automation",
      description: "End-to-end workflow automation using AI agents to streamline repetitive tasks, data entry, and complex decision-making processes.",
      highlight: false
    },
    {
      icon: Shield,
      title: "Enterprise AI Security",
      description: "Robust AI implementation strategies that prioritize data privacy, compliance, and secure local LLM deployments.",
      highlight: false
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Harness the power of AI to forecast trends, optimize inventory, and make data-driven decisions with unparalleled accuracy.",
      highlight: false
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Bespoke AI architectures tailored to your unique business needs, from prompt engineering to full-scale model fine-tuning.",
      highlight: false
    }
  ]

  return (
    <section id="services" className="section-padding bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Intelligent <span className="text-swift-blue">Solutions</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-xl"
          >
            We don't just build bots; we engineer autonomous growth engines for the modern enterprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
