import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="relative">
        {/* Animated circles */}
        <div className="absolute -inset-32 opacity-30">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-white/20 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extralight tracking-[0.2em] text-white mb-3">
              BLANQ
            </h1>
            <div className="text-white/40 tracking-[0.5em] text-sm font-light">
              STUDIO
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-[1px] bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-white"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-4 left-0 right-0 text-center"
            >
              <span className="text-white/40 text-sm tracking-widest">
                {progress === 100 ? 'WELCOME' : 'LOADING'}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}