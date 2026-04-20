import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Terminal } from 'lucide-react'

const CodeEditor = () => {
  const codeLines = [
    { text: 'const', color: 'text-purple-400' },
    { text: ' bot ', color: 'text-white' },
    { text: '=', color: 'text-blue-400' },
    { text: ' new ', color: 'text-purple-400' },
    { text: 'Agent', color: 'text-yellow-400' },
    { text: '({', color: 'text-white' },
    { text: '\n  intelligence:', color: 'text-blue-300' },
    { text: ' "GPT-4o"', color: 'text-green-400' },
    { text: ',\n  role:', color: 'text-blue-300' },
    { text: ' "Expansion Specialist"', color: 'text-green-400' },
    { text: ',\n  memory:', color: 'text-blue-300' },
    { text: ' true', color: 'text-orange-400' },
    { text: '\n});', color: 'text-white' },
    { text: '\n\nawait', color: 'text-purple-400' },
    { text: ' bot.', color: 'text-white' },
    { text: 'engage', color: 'text-blue-400' },
    { text: '(customer);', color: 'text-white' },
  ]

  return (
    <div className="relative group">
      {/* Radial Glow */}
      <div className="absolute -inset-4 bg-swift-blue/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
      
      <div className="w-full max-w-lg glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Editor Title Bar */}
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 font-bold">
            <Terminal className="w-3 h-3" />
            swift_agent.js
          </div>
        </div>
        
        {/* Editor Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <pre>
            {codeLines.map((line, i) => (
              <span key={i} className={line.color}>{line.text}</span>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text & Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-swift-blue animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              London's Evolution Agency
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-display leading-[1.1] text-white mb-8 tracking-tighter">
            Next-Generation <span className="text-swift-blue">AI</span> & <br />
            Web Solutions for <br />
            Modern Brands.
          </h1>

          <p className="text-lg text-white/60 mb-12 max-w-lg leading-relaxed">
            We build autonomous growth engines and ultra-high performance digital platforms that define the new standard of intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#contact" 
              className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Launch Your AI Solution
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="btn-secondary flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Play className="w-4 h-4 fill-white/10 group-hover:fill-white/20 transition-all" />
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Right Column: Code Editor Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <CodeEditor />
        </motion.div>
      </div>

      {/* Global Background Polishing Elements */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-swift-blue/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-deep-blue/5 blur-[150px] rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero
