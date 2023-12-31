import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Images
import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import ScrollTop from '../components/ScrollTop';

//Animation
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  lineAnim,
  photoAnim,
  sliderContainer,
  movieContainer,
  slider,
} from '../animation';


const OurWork = () => {

  return (
    <Work
    style={{ background: '#fff' }}
    variants={pageAnimation}
    exit="exit"
    initial="hidden"
    animate="show">
            <ScrollTop />

       <motion.div variants={sliderContainer}>
       <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
       </motion.div>
       <Movie 
        variants={movieContainer}>
       <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
          <motion.img variants={photoAnim} src={athelete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={movieContainer}

        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1 ,scale :1 }}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          staggerChildren: 0.25,
              duration: 0.5,
              when: 'beforeChildren',
                }}


      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img src={theracer} alt="the-race" />
        </Link>
      </Movie>
      <Movie
        variants={movieContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1 ,scale :1 }}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          staggerChildren: 0.25,
              duration: 0.5,
              when: 'beforeChildren',
                }}
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img variants={photoAnim} src={goodtimes} alt="good-times" />
        </Link>
      </Movie>
    </Work>

  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
