import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 'montreal-plumber',
    title: 'Montreal Plumber Transformation',
    description: 'A complete digital transformation for a local plumbing business, resulting in 200% increase in online leads.',
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
    ],
    stats: [
      { label: 'Estimated Increase in Leads', value: 'Up to 200%' },
      { label: 'Projected Website Traffic Growth', value: '+350%' },
      { label: 'Expected Conversion Rate', value: '12%' }
    ],
    challenge: 'Outdated online presence limiting customer reach',
    solution: 'Modern website with booking system and SEO optimization'
  },
  {
    id: 'textile-business',
    title: 'Textile Business Insight',
    description: 'Bridging the digital gap between Canadian and Bangladeshi markets for a textile manufacturer.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80'
    ],
    stats: [
      { label: 'Market Expansion', value: '2 Countries' },
      { label: 'Online Orders', value: '+180%' },
      { label: 'Customer Satisfaction', value: '96%' }
    ],
    challenge: 'Complex international market coordination',
    solution: 'Integrated e-commerce platform with multi-currency support'
  },
  {
    id: 'clothing-store',
    title: 'Revitalized Clothing Store',
    description: 'Transforming a traditional clothing store into a modern, omnichannel retail experience.',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80'
    ],
    stats: [
      { label: 'Revenue Growth', value: '+150%' },
      { label: 'Online Presence', value: '24/7' },
      { label: 'Customer Base', value: '10K+' }
    ],
    challenge: 'Traditional retail struggling in digital age',
    solution: 'Omnichannel platform with inventory synchronization'
  }
];

export default function CaseStudies() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6">Case Studies</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Explore how we've helped businesses transform their digital presence
            and achieve remarkable results through innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
                <div className="space-y-6 sm:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6">{study.title}</h2>
                    <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">{study.description}</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12"
                  >
                    {study.stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-lg">
                        <div className="text-xl sm:text-2xl font-light mb-1 sm:mb-2">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-light text-gray-400">Challenge</h3>
                      <p className="text-white/80 text-sm sm:text-base">{study.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-light text-gray-400">Solution</h3>
                      <p className="text-white/80 text-sm sm:text-base">{study.solution}</p>
                    </div>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ gap: '1rem' }}
                    className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black mt-6 sm:mt-8 w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base"
                    onClick={() => navigate(`/case-studies/${study.id}`)}
                  >
                    View Full Case Study
                    <ArrowUpRight size={18} />
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {study.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="case-study-image"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={image}
                        alt={`${study.title} showcase ${i + 1}`}
                        className="w-full h-full object-cover aspect-square"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}