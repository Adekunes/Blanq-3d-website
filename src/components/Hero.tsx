import { motion, Variants } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Text content for typed animation
  const titleLine1 = "Digital";
  const titleLine2 = "Excellence";
  const subtitleText = "Crafting immersive digital experiences";

  // Typewriter animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Text container variants with staggered children for second line
  const secondLineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: titleLine1.length * 0.1 + 0.5 // Delay based on first line length
      }
    }
  };

  // Text container variants with staggered children for subtitle
  const subtitleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: (titleLine1.length + titleLine2.length) * 0.1 + 1 // Delay based on title length
      }
    }
  };

  // Letter animation variants
  const letterVariants: Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline-block",
      transition: { duration: 0.01 }
    }
  };
  
  // Cursor animation
  const cursorVariants: Variants = {
    blinking: {
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  // Calculate total typing animation duration
  const totalTypingDuration = 
    (titleLine1.length * 0.1) + 
    (titleLine2.length * 0.1) + 
    (subtitleText.length * 0.05) + 2; // adding buffer time

  return (
    <>
      {isLoading && <LoadingScreen progress={100} />}
      
      <section className="h-screen relative bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Spline 
            scene="https://prod.spline.design/8PbKYZAshZdhAorQ/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute bottom-32 left-0 right-0 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl">
              <div className="relative text-6xl md:text-8xl font-extralight tracking-tight text-white">
                {/* First line - Digital */}
                <motion.div
                  className="relative inline-flex"
                  initial="hidden"
                  animate={isLoading ? "hidden" : "visible"}
                  variants={containerVariants}
                >
                  <div className="relative">
                    {titleLine1.split("").map((char, index) => (
                      <motion.span
                        key={`firstLine-${index}`}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                    {/* Cursor for first line that disappears after typing */}
                    <motion.span
                      className="inline-block w-[3px] h-[0.9em] bg-white absolute ml-1"
                      initial={{ opacity: 1 }}
                      animate={isLoading ? { opacity: 0 } : { 
                        opacity: [1, 0],
                        transition: { 
                          delay: titleLine1.length * 0.1 + 0.3,
                          duration: 0.2
                        }
                      }}
                    />
                  </div>
                </motion.div>
                <br />
                {/* Second line - Excellence */}
                <motion.div
                  className="relative inline-flex font-light"
                  initial="hidden"
                  animate={isLoading ? "hidden" : "visible"}
                  variants={secondLineVariants}
                >
                  <div className="relative">
                    {titleLine2.split("").map((char, index) => (
                      <motion.span
                        key={`secondLine-${index}`}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                    {/* Cursor for second line that disappears after typing */}
                    <motion.span
                      className="inline-block w-[3px] h-[0.9em] bg-white absolute ml-1"
                      initial={{ opacity: 0 }}
                      animate={isLoading ? { opacity: 0 } : { 
                        opacity: [
                          0, // Start invisible
                          0, // Stay invisible
                          1, // Appear right before typing starts
                          1, // Stay visible during typing
                          0  // Disappear after typing
                        ],
                        transition: { 
                          delay: titleLine1.length * 0.1 + 0.3, // Start transition after first line types
                          duration: titleLine2.length * 0.1 + 0.4, // Duration covers waiting + typing + end
                          times: [
                            0,                                  // Start 
                            (0.3 / (titleLine2.length * 0.1 + 0.4)), // Stay invisible during wait
                            (0.31 / (titleLine2.length * 0.1 + 0.4)), // Appear just before typing
                            (titleLine2.length * 0.1) / (titleLine2.length * 0.1 + 0.4), // Stay visible during typing
                            1                                   // End (disappear)
                          ],
                          ease: "steps(1)"
                        }
                      }}
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Subtitle with typing effect */}
              <div className="relative mt-8 mb-12">
                <motion.div
                  className="text-xl text-gray-400 leading-relaxed relative inline-flex"
                  initial="hidden"
                  animate={isLoading ? "hidden" : "visible"}
                  variants={subtitleVariants}
                >
                  {subtitleText.split("").map((char, index) => (
                    <motion.span
                      key={`subtitle-${index}`}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  {/* Persistent blinking cursor at the end */}
                  <motion.span
                    className="inline-block w-[2px] h-[1.2em] bg-gray-400 ml-1 align-middle"
                    variants={cursorVariants}
                    initial={{ opacity: 0 }}
                    animate={isLoading 
                      ? { opacity: 0 } 
                      : {
                          opacity: [
                            0, // Start invisible
                            0, // Stay invisible
                            1, // Appear right before typing starts
                            1, // Stay visible during typing
                            0  // Disappear immediately after typing
                          ],
                          transition: {
                            delay: (titleLine1.length + titleLine2.length) * 0.1 + 0.7, // Delay until after "Excellence" types
                            duration: subtitleText.length * 0.05 + 0.2, // Duration just covers the typing period plus a tiny bit
                            times: [
                              0,   // Start
                              0.08, // Stay invisible during wait
                              0.082, // Appear just before typing
                              0.99, // Stay visible during typing
                              1     // Disappear right after typing completes
                            ],
                            ease: "steps(1)"
                          }
                        }
                    }
                  />
                </motion.div>
              </div>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                transition={{ 
                  delay: totalTypingDuration, 
                  duration: 0.8 
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
                className="px-12 py-4 rounded-full bg-white/20 text-white text-lg font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}