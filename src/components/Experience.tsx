import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const achievements = [
    'Automated EC2 infrastructure provisioning using Terraform',
    'Configured Load Balancers and Auto Scaling Groups for high availability',
    'Cleaned CMDB data and improved accuracy in ServiceNow',
    'Mapped Configuration Items to incidents to reduce resolution time'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cloud & Infrastructure Intern
                </h3>
                <div className="flex items-center text-blue-600 font-semibold mb-2">
                  <Briefcase size={20} className="mr-2" />
                  <span>Stryker</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>Remote</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                <Calendar size={16} className="mr-2" />
                <span>Jul 2023 – Jul 2024</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;