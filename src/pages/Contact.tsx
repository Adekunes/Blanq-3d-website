import { motion } from 'framer-motion';
import ContactContent from '../components/Contact';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <ContactContent />
    </motion.div>
  );
}