import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ArrowUpRight } from 'lucide-react';

const caseStudies = {
  'montreal-plumber': {
    title: 'Montreal Plumber Transformation',
    subtitle: 'Digital Transformation Success Story',
    description: 'A complete digital transformation for a local plumbing business, resulting in 200% increase in online leads.',
    challenge: 'The client faced significant challenges with an outdated online presence that was limiting their customer reach. Their existing website was not mobile-friendly and lacked essential features for customer engagement.',
    approach: [
      'Conducted comprehensive market analysis',
      'Developed mobile-first website strategy',
      'Implemented advanced booking system',
      'Created targeted SEO campaign',
      'Established performance monitoring'
    ],
    solution: 'We developed a modern, user-friendly website with an integrated booking system and comprehensive SEO optimization. The new platform includes real-time availability checking and automated appointment confirmations.',
    results: [
      { metric: 'Lead Generation', before: '50/month', after: '150/month' },
      { metric: 'Website Traffic', before: '1,000/month', after: '3,500/month' },
      { metric: 'Conversion Rate', before: '3%', after: '12%' },
      { metric: 'Mobile Bookings', before: '20%', after: '65%' }
    ],
    testimonial: {
      quote: "The transformation of our digital presence has revolutionized how we do business. We're now booking more jobs than ever before.",
      author: "Jean Martin",
      role: "Owner, Montreal Premium Plumbing"
    },
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Google Analytics']
  },
  'textile-business': {
    title: 'Textile Business Insight',
    subtitle: 'International E-commerce Integration',
    description: 'Bridging the digital gap between Canadian and Bangladeshi markets for a textile manufacturer.',
    challenge: 'The client needed to coordinate complex international market operations between Canada and Bangladesh, dealing with multiple currencies, time zones, and inventory management across continents.',
    approach: [
      'Analyzed international market requirements',
      'Designed multi-currency architecture',
      'Implemented real-time inventory sync',
      'Created localized user experiences',
      'Developed automated reporting system'
    ],
    solution: 'We created an integrated e-commerce platform with multi-currency support, real-time inventory synchronization across locations, and automated currency conversion. The system handles complex international shipping calculations and customs documentation.',
    results: [
      { metric: 'Market Reach', before: '1 country', after: '2 countries' },
      { metric: 'Order Processing', before: '2-3 days', after: 'Same day' },
      { metric: 'Inventory Accuracy', before: '85%', after: '99.9%' },
      { metric: 'International Sales', before: '$0', after: '$2M/year' }
    ],
    testimonial: {
      quote: "This platform has transformed our business from a local operation to an international success. The seamless integration between markets has exceeded our expectations.",
      author: "Sarah Rahman",
      role: "CEO, Global Textile Solutions"
    },
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80'
    ],
    technologies: ['Next.js', 'Shopify', 'PostgreSQL', 'Redis', 'Docker']
  },
  'clothing-store': {
    title: 'Revitalized Clothing Store',
    subtitle: 'Omnichannel Retail Revolution',
    description: 'Transforming a traditional clothing store into a modern, omnichannel retail experience.',
    challenge: 'A traditional brick-and-mortar clothing retailer was struggling to compete in the digital age, with declining foot traffic and no online presence to capture the growing e-commerce market.',
    approach: [
      'Developed omnichannel strategy',
      'Created integrated inventory system',
      'Implemented virtual try-on technology',
      'Designed mobile shopping experience',
      'Built loyalty program integration'
    ],
    solution: 'We developed an omnichannel platform that seamlessly connects in-store and online shopping experiences. The solution includes real-time inventory synchronization, a virtual try-on system using AR technology, and an integrated loyalty program.',
    results: [
      { metric: 'Total Revenue', before: '$1M/year', after: '$2.5M/year' },
      { metric: 'Customer Base', before: '2,000', after: '10,000+' },
      { metric: 'Average Order Value', before: '$85', after: '$150' },
      { metric: 'Customer Retention', before: '40%', after: '75%' }
    ],
    testimonial: {
      quote: "The transformation has brought our traditional store into the modern era. Our customers love the seamless experience between online and in-store shopping.",
      author: "Michael Chen",
      role: "Owner, Urban Style Collective"
    },
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80'
    ],
    technologies: ['React Native', 'Shopify Plus', 'AR Kit', 'Stripe', 'Firebase']
  }
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <button
          onClick={() => navigate('/case-studies')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12"
        >
          <ArrowLeft size={20} />
          <span className="text-sm sm:text-base">Back to Case Studies</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 sm:space-y-12"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-3 sm:mb-4">{study.title}</h1>
              <p className="text-lg sm:text-xl text-gray-400">{study.subtitle}</p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Challenge</h2>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{study.challenge}</p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Our Approach</h2>
                <div className="space-y-2 sm:space-y-3">
                  {study.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check size={18} className="mt-1 text-white" />
                      <span className="text-gray-400 text-sm sm:text-base">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Solution</h2>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{study.solution}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Key Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {study.results.map((result, index) => (
                  <div key={index} className="bg-white/5 p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg mb-3 sm:mb-4">{result.metric}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs sm:text-sm text-gray-400">Before</div>
                        <div className="text-lg sm:text-xl">{result.before}</div>
                      </div>
                      <ArrowUpRight size={20} className="text-gray-400" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-400">After</div>
                        <div className="text-lg sm:text-xl text-green-400">{result.after}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-6 sm:p-8">
              <blockquote className="text-lg sm:text-xl italic mb-4">"{study.testimonial.quote}"</blockquote>
              <div>
                <div className="font-medium text-sm sm:text-base">{study.testimonial.author}</div>
                <div className="text-gray-400 text-sm">{study.testimonial.role}</div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, index) => (
                  <span key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-8"
          >
            {study.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="case-study-image"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image}
                  alt={`${study.title} showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}