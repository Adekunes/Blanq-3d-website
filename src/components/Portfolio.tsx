import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Luxury Fashion House',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
    year: '2023'
  },
  {
    title: 'Modern Art Gallery',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1517637633369-e4cc28755e01?auto=format&fit=crop&q=80',
    year: '2023'
  },
  {
    title: 'Architectural Vision',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?auto=format&fit=crop&q=80',
    year: '2023'
  },
  {
    title: 'Premium Automotive',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    year: '2022'
  }
];

export default function Portfolio() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex = activeIndex + newDirection;
    if (newIndex >= 0 && newIndex < projects.length) {
      setActiveIndex([newIndex, newDirection]);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      <div className="h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-8 md:py-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4 md:mb-6 px-6">Selected Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-6 text-sm md:text-base">
            A curated collection of our finest projects, showcasing our commitment
            to excellence and innovation in digital design.
          </p>
        </motion.div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full flex items-center justify-center px-4 md:px-0"
              >
                <div className="relative w-full md:w-[80vw] h-[50vh] md:h-[70vh]">
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-light mb-2">{projects[activeIndex].title}</h3>
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
                      <span>{projects[activeIndex].category}</span>
                      <span>{projects[activeIndex].year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className={`p-2 md:p-3 rounded-full glass-effect ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={activeIndex === 0}
              >
                <ArrowLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className={`p-2 md:p-3 rounded-full glass-effect ${activeIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={activeIndex === projects.length - 1}
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}