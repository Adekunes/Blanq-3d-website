import { motion } from 'framer-motion';
import PortfolioContent from '../components/Portfolio';

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <PortfolioContent />
    </motion.div>
  );
}