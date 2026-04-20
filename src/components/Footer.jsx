import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-midnight py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <img 
            src="/image_15e44d.png" 
            alt="SwiftSolve Bird" 
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
            © 2026 SwiftSolve AI.
          </p>
        </motion.div>
        
        <div className="flex gap-8 text-[9px] uppercase tracking-widest font-bold text-white/20">
          <a href="#" className="hover:text-swift-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-swift-blue transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-swift-blue transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
