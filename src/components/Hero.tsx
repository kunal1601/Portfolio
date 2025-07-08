import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { Download, Github, Linkedin, ArrowDown, Monitor } from 'lucide-react';
import KunalImage from '../assets/Kunal_image.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Available for Hire badge in top left */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: easeOut }}
        className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded-lg bg-white/10 border border-green-400 shadow-lg text-green-400 font-semibold text-xs sm:text-sm lg:text-base drop-shadow-md backdrop-blur-sm"
      >
        Available for Hire
      </motion.div>
      {/* Animated Floating Circles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small Floating Circles - All Over */}
        <div className="absolute inset-0 opacity-45">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`small-circle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 backdrop-blur-sm border border-white/40 shadow-lg"
              style={{
                width: `${6 + Math.random() * 12}px`,
                height: `${6 + Math.random() * 12}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        {/* Medium Floating Circles - All Over */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`medium-circle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/60 to-indigo-400/60 backdrop-blur-md border border-cyan-400/50 shadow-xl"
              style={{
                width: `${12 + Math.random() * 18}px`,
                height: `${12 + Math.random() * 18}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 25 - 12, 0],
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4
              }}
            />
          ))}
        </div>

        {/* Large Glowing Circles - All Over */}
        <div className="absolute inset-0 opacity-35">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`large-circle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-green-400/55 to-blue-400/55 backdrop-blur-lg border border-green-400/60 shadow-2xl"
              style={{
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 7 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Extra Large Glowing Circles - Strategic Positions */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`xlarge-circle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-purple-400/50 to-pink-400/50 backdrop-blur-xl border border-purple-400/70 shadow-2xl"
              style={{
                width: `${35 + Math.random() * 25}px`,
                height: `${35 + Math.random() * 25}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.random() * 35 - 17, 0],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6
              }}
            />
          ))}
        </div>

        {/* Floating Icons - All Over */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`icon-${i}`}
              className="absolute text-white/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            >
              {[
                '🐳', '☸️', '🔧', '⚡', '🚀', '🔒',
                '📦', '🌐', '⚙️', '🔍', '📊', '🛡️',
                '💻', '🔗', '⚡', '🎯', '🔮', '🌟', '💎', '🎨'
              ][i % 20]}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mt-14 lg:mt-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: easeOut }}
            className="text-center lg:text-left space-y-4 mb-6 lg:mb-0 lg:-mt-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: easeOut }}
              className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(102,126,234,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Kunal Sharma
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, delay: 0.7, ease: easeOut }}
              className="text-2xl lg:text-4xl font-semibold text-white/90 mb-4 drop-shadow-md typewriter"
              style={{ border: 'none', animation: 'typing 2s steps(20, end) forwards', lineHeight: '1.2' }}
            >
              DevOps Engineer
            </motion.h2>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: easeOut }}
              className="text-lg lg:text-2xl text-white/80 mb-6 max-w-xl drop-shadow-sm"
            >
              Empowering innovation through automation, cloud, and open source.
            </motion.p>

            {/* Tech Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: easeOut }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt="Ansible" className="w-10 h-10" />
              <span style={{ background: '#FF9900', color: 'white', fontWeight: 'bold', borderRadius: '6px', padding: '4px 12px', fontSize: '1.2rem', display: 'inline-block', height: '40px', lineHeight: '32px' }}>AWS</span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-10 h-10" />
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ zIndex: 0 }}
                  animate={{
                    y: [0, -16, 0],
                    x: [0, 8, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400/60 to-indigo-400/60 border border-cyan-400/50 backdrop-blur-md shadow-xl"></div>
                </motion.div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Shell Scripting" className="w-10 h-10 relative z-10" />
              </div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: easeOut }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-primary text-white px-10 py-4 rounded-full font-semibold glow-on-hover text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.a
                href="/Kunal_Sharma_Resume.pdf"
                download
                className="glass-effect text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 glow-on-hover flex items-center gap-3 justify-center border border-white/30 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download size={24} />
                </motion.div>
                Resume
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: easeOut }}
            className="flex flex-col items-center mt-8 lg:mt-[-80px]"
          >
            <div className="relative">
              <motion.img
                src={KunalImage}
                alt="Kunal Sharma"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white/40 relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {/* Social Links - Always below image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: easeOut }}
              className="flex justify-center gap-6 mt-4"
            >
              <motion.a
                href="https://github.com/kunal1601"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-4 rounded-full hover:bg-white/20 transition-all duration-300 glow-on-hover border border-white/30 float-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={28} className="text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kunal1601"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-4 rounded-full hover:bg-white/20 transition-all duration-300 glow-on-hover border border-white/30 float-icon"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                style={{ animationDelay: '1s' }}
              >
                <Linkedin size={28} className="text-white" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Computer Icon - Top Right Corner */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: easeOut }}
          className="absolute top-8 right-8 z-20 opacity-50 hover:opacity-80 transition-opacity duration-300 hidden sm:block"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Computer Screen */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-600/50 rounded-lg p-3 shadow-2xl">
              <Monitor size={32} className="text-green-400 drop-shadow-lg opacity-80" />
            </div>
            
            {/* Code Lines Animation */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-1 -right-1 text-xs text-green-400 font-mono"
            >
              &lt;/&gt;
            </motion.div>
            
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-green-400/20 rounded-lg blur-sm"
            />
          </motion.div>
        </motion.div>

        {/* Animated Spark Symbol - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: easeOut }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
              duration: 5,
                  repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="text-3xl text-yellow-400 drop-shadow-xl"
          >
            ⚡
          </motion.div>
          
          {/* Spark Trail Effect */}
              <motion.div
                animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0]
                }}
                transition={{ 
              duration: 3,
                  repeat: Infinity, 
              delay: 0.8,
              ease: "easeInOut"
            }}
            className="absolute inset-0 text-lg text-yellow-300/70"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            ✨
          </motion.div>
          
          {/* Additional Spark Particles */}
              <motion.div 
                animate={{ 
              y: [0, -18, 0],
              x: [0, 8, 0],
              opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
              delay: 1.2,
                  ease: "easeInOut" 
                }}
            className="absolute -top-2 -right-2 text-base text-yellow-300/80"
          >
            ✨
            </motion.div>
          
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, -7, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 1.8,
              ease: "easeInOut"
            }}
            className="absolute -top-1 -left-2 text-xs text-yellow-300/70"
          >
            ✨
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: 2.1,
              ease: "easeInOut"
            }}
            className="absolute top-2 -right-1 text-xs text-yellow-300/60"
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: easeOut }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white/80 hover:text-white transition-colors duration-300 glass-effect p-4 rounded-full border border-white/30 glow-on-hover"
            whileHover={{ scale: 1.2 }}
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;