import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:kunalsharma1601@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-56 h-56 bg-blue-200/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, -60, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200/20 rounded-full blur-2xl"
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
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about DevOps and cloud technologies.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-8"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Let's Connect
              </motion.h3>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-full mr-6 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail size={24} className="text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Email</h4>
                    <motion.p 
                      className="text-gray-600"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      kunalsharma1601@gmail.com
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-full mr-6 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: -360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin size={24} className="text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Location</h4>
                    <motion.p 
                      className="text-gray-600"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      Available for Remote Work
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h4 className="font-semibold text-gray-900 mb-6 text-lg">Follow Me</h4>
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/kunal1601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 glow-on-hover border border-white/50"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={28} className="text-gray-800" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/kunal1601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 glow-on-hover border border-white/50"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: -5,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={28} className="text-blue-600" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                animate={{ 
                  background: [
                    "linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)",
                    "linear-gradient(135deg, rgba(79,172,254,0.05) 0%, rgba(0,242,254,0.05) 100%)",
                    "linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-8 relative z-10"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Send Message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your email"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Your message here..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 glow-on-hover flex items-center justify-center gap-3 text-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Send size={24} />
                  </motion.div>
                  Send Message
                  
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;