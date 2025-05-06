import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <motion.div 
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="relative mb-8"
              >
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-white/10" />
                <h2 className="text-5xl md:text-6xl font-light tracking-tight">
                  Let's Create
                  <br />
                  Together
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-lg text-gray-400 mb-12 leading-relaxed"
              >
                Ready to elevate your digital presence? We're here to transform your vision into reality.
                Get in touch and let's start crafting something extraordinary.
              </motion.p>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@blanq.studio' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: MapPin, label: 'Location', value: 'New York, NY' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 glass-effect rounded-full">
                      <contact.icon size={20} className="text-white/70" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-400 mb-1">{contact.label}</span>
                      <span className="text-xl font-light">{contact.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border-b border-white/10 py-4 px-6 text-white placeholder-white/30 focus:border-white transition-colors outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border-b border-white/10 py-4 px-6 text-white placeholder-white/30 focus:border-white transition-colors outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border-b border-white/10 py-4 px-6 text-white placeholder-white/30 focus:border-white transition-colors outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
            </div>

            <motion.button
              whileHover={{ gap: '1rem', scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-white text-black w-full justify-center text-lg font-light tracking-wider"
            >
              Send Message
              <ArrowUpRight size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}