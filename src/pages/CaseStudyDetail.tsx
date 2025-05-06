import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ArrowUpRight } from 'lucide-react';

const caseStudies = {
  'montreal-plumber': {
    title: 'Montreal Plumber Transformation',
    subtitle: 'Digital Growth Strategy Showcase',
    description: 'A complete digital transformation for a local plumbing business, resulting in 200% increase in online leads.',
    challenge: 'The client faced significant challenges with an outdated online presence that was limiting their customer reach. Their existing website was not mobile-friendly and lacked essential features for customer engagement.',
    approach: [
      'Conducted comprehensive market analysis',
      'Developed mobile-first website strategy',
      'Designed conversion-focused homepage layout',
      'Created targeted SEO campaign',
      'Established performance monitoring'
    ],
    solution: 'We developed a modern, user-friendly website with an integrated booking system and comprehensive SEO optimization. The new platform includes real-time availability checking and automated appointment confirmations.',
    results: [
      { metric: 'Lead Generation', before: '50/month', after: '150/month' },
      { metric: 'Website Traffic', before: '1k/month', after: '3,5k/month' },
      { metric: 'Conversion Rate', before: '3%', after: '12%' },
      { metric: 'Mobile Bookings', before: '20%', after: '65%' }
    ],
    testimonial: {
      quote: "We partnered with Montreal Premium Plumbing to explore digital strategies aimed at enhancing their online presence, increasing lead generation, and improving customer engagement. Though the project was not fully executed, our plan included a mobile-first website redesign, targeted SEO improvements, and strategies for higher conversion rates.",
      author: "Project Overview",
      role: "Montreal Plumbing"
    },
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
    ],
    technologies: ['React', 'Tanstack Query', 'React Router', 'Google Analytics']
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
    solution: 'We created a responsive presentation website with mobile-first design, fast load speeds, and clear service messaging. The site was optimized for local SEO, built to convert visitors into leads, and designed for future integration of contact or booking tools.',
    results: [
      { metric: 'Market Reach', before: '1 country', after: '2 countries' },
      { metric: 'Customer Engagement (Time On Site)', before: '30s', after: '120s' },
      { metric: 'Website Performance', before: '5s load time', after: '2.5s load time' },
      { metric: 'Customer Retention Rate', before: '30%', after: '55%' }

    ],
    testimonial: {
      quote: "We are beyond thrilled with the website Blanq delivered! Not only was it completed faster than we expected, but the quality is a huge step up from our previous site. The design is sleek, modern, and so much more user-friendly. It's made a noticeable difference in how our customers engage with us, and we couldn't be happier with the results!",
      author: "Anonymous",
      role: "QS Incorporation"
    },
    images: [
      '/images/qsincorporation_compressed_img/img1.jpg',
      '/images/qsincorporation_compressed_img/img2.jpg',
      '/images/qsincorporation_compressed_img/img3.jpg',
      '/images/qsincorporation_compressed_img/img4.jpg'
    ],
    technologies: ['React', 'Tanstack Query', 'React Router', 'Google Analytics']
  },
  'art-gallery': {
    title: 'Revitalized Art Gallery',
    subtitle: 'Online Presence and Customer Engagement',
    description: 'Modernizing an art gallery’s online presence to enhance customer engagement and streamline browsing experience.',
    challenge: 'Building an online presence and reaching potential buyers as a new artist.',
    approach: [
      'Developed a visually appealing portfolio website',
      'Created a strong online presence through social media and web',
      'Integrated contact form for art inquiries and commissions',
      'Designed mobile-friendly gallery for easy browsing',
      'Set up a system for promoting upcoming exhibitions and art shows'
    ],
    solution: 'We developed a modern, user-focused presentation website to enhance online visibility and customer engagement',
    results: [
      { metric: 'Artwork Sales', before: '5 pieces', after: '20+ pieces' },
      { metric: 'Online Engagement', before: '100 followers', after: '500+ followers' },
      { metric: 'Client Inquiries', before: '5/month', after: '20+/month' },
      { metric: 'Commission Requests', before: '0', after: '5+ commissions' }
    ]
    ,
    testimonial: {
      quote: "Took some time but just want to stay thank you for my website ! Efficient communication and they make it seem like its a team effort",
      author: "Cassandra A. Gomez",
      role: "Owner, A D'os D'anne"
    },
    images: [
      '/images/adosdanne_compressed_img/img1.jpg',
      '/images/adosdanne_compressed_img/img2.jpg',
      '/images/adosdanne_compressed_img/img3.jpg',
      '/images/adosdanne_compressed_img/img4.jpg'
    ],
    technologies: ['HTML', 'CSS', 'Javascript', 'Google Analytics']
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
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Key Results <span className="text-xs text-gray-400">(Projections based on industry benchmarks and similar projects.)</span></h2>
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