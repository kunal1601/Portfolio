import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skillsData';
import * as Icons from 'lucide-react';
import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -80, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -120, 0],
            y: [0, 60, 0],
            scale: [1, 1.6, 1],
            rotate: [360, 0],
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, 0],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-teal-200/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
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
            Skills and Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => {
            const IconComponent = Icons[skill.icon as keyof typeof Icons] as React.ComponentType<any>;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/50 group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)",
                      "linear-gradient(135deg, rgba(79,172,254,0.05) 0%, rgba(0,242,254,0.05) 100%)",
                      "linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 relative z-10"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(102,126,234,0.3)",
                      "0 0 40px rgba(118,75,162,0.4)",
                      "0 0 20px rgba(102,126,234,0.3)"
                    ]
                  }}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <IconComponent size={36} className="text-blue-600" />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-4 relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-6 relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.description}
                </motion.p>
                
                <div className="relative z-10">
                  <div className="w-11/12 bg-gray-200 rounded-full h-4 mb-3 overflow-hidden relative flex items-center mx-auto">
                    <div
                      className="absolute left-0 top-0 h-full bg-blue-900 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1 justify-between">
                    <span className="text-sm text-gray-500 font-medium">Proficiency</span>
                    <span className="text-sm font-bold text-blue-900 select-none ml-auto">{skill.level}%</span>
                  </div>
                </div>

                {/* Floating particles around the card */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400/60 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/60 rounded-full"
                  animate={{
                    y: [0, 8, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;