import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Code2, Palette, ShoppingBag, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'BLANQ Starter',
    price: 'From $1,000',
    color: 'bg-blue-100/10',
    icon: <Code2 size={32} className="text-blue-400" />,
    description: 'Perfect for startups, small businesses, and freelancers who need a clean, professional online presence.',
    features: [
      '3 Pages (Home, About, Contact)',
      'Custom Design (1 Revision)',
      'Mobile-Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Google Maps Embed',
      '7-Day Support Post-Launch'
    ],
    process: [
      'Client Onboarding & Information Gathering',
      'Homepage Design',
      'Full Site Development',
      'Launch & Support'
    ]
  },
  {
    name: 'BLANQ Pro',
    price: 'From $2,000',
    color: 'bg-blue-500/10',
    recommended: true,
    icon: <Palette size={32} className="text-indigo-400" />,
    description: 'Ideal for businesses ready to showcase more services and publish content.',
    features: [
      '6 Pages (Home, About, Services, Portfolio, Blog, Contact)',
      '2 Rounds of Revisions',
      'Blog/News System',
      'CMS Integration (Webflow/WordPress)',
      'Custom Icons/Graphics',
      'Basic Animations',
      'Google Analytics + Meta Pixel'
    ],
    process: [
      'CMS Setup & Configuration',
      'Design & Development',
      'Animation Implementation',
      'Training Video Production'
    ]
  },
  {
    name: 'BLANQ Commerce',
    price: 'From $3,500',
    color: 'bg-orange-500/10',
    icon: <ShoppingBag size={32} className="text-orange-400" />,
    description: 'Complete e-commerce solution for businesses selling physical or digital products.',
    features: [
      'All BLANQ Pro Features',
      'E-commerce Setup (Shopify/Custom)',
      'Up to 25 Products Setup',
      'Cart + Checkout System',
      'Payment Gateway Integration',
      'Product Filters/Categories',
      'Order Notification Emails',
      '30-Day Support'
    ],
    process: [
      'Store Planning & Categories',
      'Product Content Setup',
      'Store Layout Design',
      'Testing & Launch'
    ]
  },
  {
    name: 'BLANQ Elite',
    price: 'From $5,000',
    color: 'bg-purple-500/10',
    icon: <Sparkles size={32} className="text-purple-400" />,
    description: 'Premium solution for scaling businesses requiring high performance and long-term support.',
    features: [
      'Up to 12 Fully Custom Pages',
      'Advanced SEO Setup',
      'Speed Optimization',
      'Multilingual Support',
      'Custom Animations',
      'CRM/Email Integration',
      '3 Months of Support',
      'Priority Service'
    ],
    process: [
      'Strategy & Planning',
      'Brand Identity Development',
      'Comprehensive Development',
      'Ongoing Support & Monitoring'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="min-h-screen py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">Pricing Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package for your business needs. Each plan is carefully crafted to
            deliver maximum value and results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${pkg.color} p-8 hover:bg-opacity-20 transition-all duration-500 ${
                pkg.recommended ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-black' : ''
              }`}
            >
              {pkg.recommended && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25
                  }}
                  className="absolute -top-4 -right-4 z-10"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500 blur-md opacity-50"></div>
                    <div className="relative px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full">
                      <span className="text-sm font-medium tracking-wider">RECOMMENDED</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div className="mb-8">
                <div className={`mb-4 p-4 inline-block rounded-2xl bg-white/5 backdrop-blur-lg ${
                  pkg.recommended ? 'bg-indigo-500/10' : ''
                }`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-light mb-2">{pkg.name}</h3>
                <div className="text-3xl font-light mb-4">{pkg.price}</div>
                <p className="text-gray-400">{pkg.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-light mb-4">What's Included:</h4>
                <div className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={18} className={`mt-1 ${pkg.recommended ? 'text-indigo-400' : 'text-white'}`} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-light mb-4">Our Process:</h4>
                <div className="space-y-4">
                  {pkg.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                        pkg.recommended ? 'bg-indigo-500/20' : 'bg-white/10'
                      }`}>
                        {i + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ gap: '1rem' }}
                className={`flex items-center gap-2 px-8 py-4 w-full justify-center text-lg font-light tracking-wider mt-8 ${
                  pkg.recommended 
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-400 text-white hover:from-indigo-500 hover:to-indigo-300'
                    : 'bg-white text-black'
                }`}
              >
                Get Started
                <ArrowUpRight size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}