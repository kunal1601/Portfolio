import React from 'react';
import { motion, useAnimation, useMotionValue, useTransform, animate, easeInOut, easeOut } from 'framer-motion';
import { skills } from '../data/skillsData';
import * as Icons from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <>
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: easeInOut 
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold text-gray-900 mb-4"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4facfe 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

            {/* About Me Content Only */}
            <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-3xl font-semibold text-gray-900 mb-6"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(102,126,234,0)",
                      "0 0 20px rgba(102,126,234,0.3)",
                      "0 0 0px rgba(102,126,234,0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Passionate DevOps Engineer
                </motion.span>
              </motion.h3>
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Skilled in Shell Scripting, Docker, and Linux system administration, with hands-on experience in AWS cloud services.
                Successfully deployed and managed EC2 instances, automated infrastructure using Terraform, and implemented Auto Scaling Groups to optimize performance.
              </motion.p>
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Passionate about using automation and cloud tools to build scalable and cost-effective IT infrastructure solutions.
                I thrive in collaborative environment and enjoy solving complex technical challenges.
              </motion.p>
              {/* Animated stats */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div 
                  className="text-center p-3 sm:p-4 bg-white/70 rounded-xl shadow-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-xl sm:text-2xl font-bold text-blue-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    1+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </motion.div>
                <motion.div 
                  className="text-center p-3 sm:p-4 bg-white/70 rounded-xl shadow-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-xl sm:text-2xl font-bold text-purple-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    8+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                </motion.div>
                <motion.div 
                  className="text-center p-3 sm:p-4 bg-white/70 rounded-xl shadow-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-xl sm:text-2xl font-bold text-teal-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    6+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">Technologies</div>
                </motion.div>
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;