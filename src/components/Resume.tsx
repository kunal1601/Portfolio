import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 mb-12 text-lg">
            Download my comprehensive resume to learn more about my experience, skills, and achievements.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-blue-100 p-6 rounded-full">
                <FileText size={48} className="text-blue-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kunal Sharma - DevOps Engineer
            </h3>
            <p className="text-gray-600 mb-8">
              Complete professional resume with detailed experience, education, and technical skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Kunal_Sharma_Resume.pdf"
                download
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 glow-on-hover"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="/Kunal_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 glow-on-hover"
              >
                <Eye size={20} />
                View Online
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;