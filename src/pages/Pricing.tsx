import { motion } from 'framer-motion';
import PricingContent from '../components/Pricing';

export default function Pricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <PricingContent />
    </motion.div>
  );
}