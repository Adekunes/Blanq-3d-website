import { motion } from 'framer-motion';
import ServicesContent from '../components/Services';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <ServicesContent />
    </motion.div>
  );
}