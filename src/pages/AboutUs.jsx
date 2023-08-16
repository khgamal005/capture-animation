//Page components
import AboutSection from '../components/AboutSection';
import { pageAnimation } from '../animation';

import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
  return (
    <motion.div
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show"
    >
            <ScrollTop />
      <AboutSection />
      <ServicesSection/>
      <FaqSection/>
    
    </motion.div>
  );
};

export default AboutUs;
