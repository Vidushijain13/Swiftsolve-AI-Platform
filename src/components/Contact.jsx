import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Shield, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative bg-midnight pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-swift-blue/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-12"></div>
      
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-swift-blue/20 bg-swift-blue/5 mb-6 text-swift-blue text-[10px] font-bold uppercase tracking-widest">
            <CheckCircle className="w-3 h-3" />
            Direct Access to Founders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
            Launch Your <span className="text-swift-blue italic">AI Roadmap</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Scale your operations with autonomous systems. Brief us on your project and we'll handle the evolution.
          </p>
        </motion.div>

        {/* Minimalist B2B Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative z-10"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-swift-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">Message Received</h3>
              <p className="text-white/50">Our founders will review your roadmap and contact you within 24h.</p>
            </motion.div>
          ) : (
            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form Submitted:", new FormData(e.target));
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-swift-blue/50 focus:bg-white/10 transition-all shadow-inner"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Company Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-swift-blue/50 focus:bg-white/10 transition-all shadow-inner"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Project Brief</label>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="Tell us about the processes you want to automate..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-swift-blue/50 focus:bg-white/10 transition-all shadow-inner resize-none"
                  required
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-swift-blue hover:bg-swift-blue/90 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-swift-blue/20 group"
              >
                Initialize Consultation
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              
              <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] text-white/30 font-bold uppercase tracking-widest">
                      <Shield className="w-3 h-3 text-swift-blue" /> Data NDA Protected
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/30 font-bold uppercase tracking-widest">
                      <Mail className="w-3 h-3 text-swift-blue" /> Human Response in 24h
                  </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
