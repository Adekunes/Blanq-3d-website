import { motion } from 'framer-motion';
import AboutContent from '../components/About';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <AboutContent />
    </motion.div>
  );
}