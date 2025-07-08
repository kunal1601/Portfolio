import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Master's in Engineering (ME) - Computer Science",
    institution: 'Thapar Institute of Engineering and Technology, Patiala',
    year: '2022-2024',
    details: [
      'CGPA: 8.02',
    ],
  },
  {
    degree: 'Bachelor in Technology (B.Tech) - Computer Science',
    institution: 'BK Birla Institute of Engineering and Technology, Pilani',
    year: '2018-2022',
    details: [
      'CGPA: 8.24',
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Remove FallingStars background animation */}
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
            Education
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
        <div className="max-w-3xl mx-auto grid gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 text-left relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{edu.degree}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="text-lg text-gray-700 font-semibold">{edu.institution}</span>
                <span className="text-md text-blue-700 font-medium mt-1 sm:mt-0">{edu.year}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 