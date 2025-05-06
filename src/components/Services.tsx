import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Palette, ShoppingBag, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'custom-website-development',
    title: 'Custom Website Development',
    description: 'Building modern, high-performance websites tailored to client needs. We create responsive, scalable solutions that drive results.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    icon: Globe
  },
  {
    id: 'web-design-ui-ux',
    title: 'Web Design & UI/UX',
    description: 'Creating intuitive, visually appealing, and user-friendly interfaces that enhance user engagement and satisfaction.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    icon: Palette
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description: 'Developing online stores with seamless shopping experiences, secure payment integration, and robust inventory management.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    icon: ShoppingBag
  },
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    description: 'Integrating AI-powered chatbots for automation and customer interaction, enhancing user experience and business efficiency.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    icon: Bot
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in creating digital experiences that merge aesthetics with functionality,
            delivering solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/5 p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 glass-effect rounded-full">
                  <service.icon size={24} className="text-white/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-4 flex items-center gap-2 group-hover:gap-4 transition-all">
                    {service.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all" size={20} />
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}