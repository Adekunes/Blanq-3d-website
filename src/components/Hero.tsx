import { motion } from 'framer-motion';
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
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-6xl md:text-8xl font-extralight mb-8 tracking-tight text-white"
              >
                Digital
                <br />
                <span className="font-light">Excellence</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl text-gray-400 mb-12 leading-relaxed"
              >
                Crafting immersive digital experiences that transcend the ordinary
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
                className="px-12 py-5 rounded-full bg-white/20 text-white text-lg font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300"
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