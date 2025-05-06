import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const services = {
  'custom-website-development': {
    title: 'Custom Website Development',
    description: 'Building modern, high-performance websites tailored to your unique needs and objectives.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    features: [
      'Responsive design for all devices',
      'Performance optimization',
      'SEO-friendly architecture',
      'Custom functionality development',
      'Integration with third-party services',
      'Comprehensive testing and QA',
      'Ongoing maintenance and support',
      'Security implementation'
    ],
    process: [
      'Requirements Analysis',
      'Design and Prototyping',
      'Development',
      'Testing',
      'Deployment',
      'Maintenance'
    ]
  },
  'web-design-ui-ux': {
    title: 'Web Design & UI/UX',
    description: 'Creating intuitive, visually stunning interfaces that enhance user engagement and drive conversions.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    features: [
      'User research and analysis',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Interactive animations',
      'Accessibility compliance',
      'User testing and feedback',
      'Design system creation',
      'Mobile-first approach'
    ],
    process: [
      'User Research',
      'Information Architecture',
      'Wireframing',
      'Visual Design',
      'Prototyping',
      'User Testing'
    ]
  },
  'ecommerce-development': {
    title: 'E-commerce Development',
    description: 'Building powerful online stores that drive sales and deliver exceptional shopping experiences.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    features: [
      'Secure payment integration',
      'Inventory management',
      'Order processing system',
      'Customer account management',
      'Product catalog management',
      'Shopping cart functionality',
      'Analytics and reporting',
      'Mobile commerce optimization'
    ],
    process: [
      'Platform Selection',
      'Store Setup',
      'Payment Integration',
      'Product Upload',
      'Testing',
      'Launch'
    ]
  },
  'ai-chatbot-development': {
    title: 'AI Chatbot Development',
    description: 'Implementing intelligent conversational interfaces that enhance customer service and automate processes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    features: [
      'Natural language processing',
      'Machine learning integration',
      'Multi-platform support',
      'Custom dialogue flows',
      'Analytics and insights',
      'Integration with existing systems',
      '24/7 automated support',
      'Continuous learning capabilities'
    ],
    process: [
      'Requirements Gathering',
      'AI Model Selection',
      'Training Data Preparation',
      'Development',
      'Testing',
      'Deployment'
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-6xl font-light mb-8"
            >
              {service.title}
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-12 leading-relaxed"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-light mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-white/10">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-light mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}