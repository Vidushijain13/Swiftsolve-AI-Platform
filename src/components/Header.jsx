import React from 'react'
import { motion } from 'framer-motion'


const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 glass border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/image_15e44d.png" 
            alt="SwiftSolve Bird" 
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="font-display text-xl md:text-2xl font-black italic tracking-tighter text-white">
            SWIFTSOLVE <span className="text-swift-blue not-italic">AI</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          {["Services", "Method", "Why Us", "Contact"].map((item) => (
            <a 
              key={item} 
              href={item === "Why Us" ? "#why-us" : `#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="hover:text-swift-blue transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 glass hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-full h-0.5 bg-white rounded-full"></div>
          <div className="w-2/3 h-0.5 bg-white rounded-full self-end"></div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
