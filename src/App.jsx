import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="relative bg-midnight text-white selection:bg-swift-blue/30 overflow-x-hidden min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-swift-blue z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Main Layout */}
      <Header />
      <Hero />
      <Services />
      
      {/* Additional Branding/Call-to-Action Section */}
      <section id="method" className="section-padding flex items-center justify-center bg-midnight">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
            The era of manual labor is <span className="text-swift-blue">over</span>.
            <br />
            Join the automation revolution today.
          </h2>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Launch Your AI Solution
            </a>
          </motion.div>
        </motion.div>
      </section>

      <WhyUs />
      <Contact />
      <Footer />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-swift-blue/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-deep-blue/5 blur-[150px] rounded-full"></div>
      </div>
    </main>
  )
}

export default App
