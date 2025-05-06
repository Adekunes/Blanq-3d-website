import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      bio: 'With over a decade of experience in digital design, Sarah leads our creative vision with a focus on innovative, user-centric solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      bio: 'Marcus brings extensive expertise in emerging technologies and 3D development, ensuring our projects push technical boundaries.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20 items-center mb-32"
        >
          <div>
            <motion.div 
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              className="relative mb-8"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-white/10" />
              <h2 className="text-5xl md:text-6xl font-light tracking-tight">
                Digital
                <br />
                Excellence
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              BLANQ is more than a digital agency—we're architects of exceptional online experiences. 
              Our approach combines minimalist aesthetics with cutting-edge technology to create 
              websites that command attention and deliver results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              {[
                { number: '95%', text: 'Client satisfaction rate' },
                { number: '150+', text: 'Projects delivered' },
                { number: '12', text: 'Industry awards' }
              ].map((stat, index) => (
                <div key={index} className="flex items-baseline gap-4">
                  <span className="text-3xl font-light">{stat.number}</span>
                  <span className="text-gray-500">{stat.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-white/5" />
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
              alt="Premium workspace"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the creative minds behind BLANQ. Our leadership team brings together
            decades of experience in digital design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/5 p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-24 h-24 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-1">{member.name}</h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <div className="flex gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = {
                        linkedin: Linkedin,
                        twitter: Twitter,
                        github: Github
                      }[platform];
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 glass-effect rounded-full hover:bg-white/20 transition-colors"
                        >
                          <Icon size={16} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}