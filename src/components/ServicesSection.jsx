
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import homeImg2 from '../img/home2.png';

import { About, Description,Image } from '../../styles';
import styled from 'styled-components';
//Scroll animation

import { useEffect } from 'react';
import { useAnimate, useInView } from "framer-motion"



    const ServicesSection = () => {
      const [scope, animate] = useAnimate()
      const view = useInView(scope)
    

      useEffect(() => {
        if (view) {
          animate(scope.current, { opacity: 1, scale:1 },{ duration:1 }
            
            )
       
        }else{
          animate(scope.current, {opacity: 0, scale: 0.7 } ,{duration:0})

        }
     }, [animate, scope, view])

      return (
        <Services
         ref={scope}
          >
          <Description>
            <h2>
              High <span>quality</span> services.
            </h2>
            <Cards>
              <Card>
                <div className="icon">
                  <img src={clock} alt="" />
                  <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
              <Card>
                <div className="icon">
                  <img src={teamwork} alt="" />
                  <h3>Teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
              <Card>
                <div className="icon">
                  <img src={diaphragm} alt="" />
                  <h3>Pro Grade Gear</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
              <Card>
                <div className="icon">
                  <img src={money} alt="" />
                  <h3>Affordable</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </Card>
            </Cards>
          </Description>
          <Image>
            <img src={homeImg2} alt="camera" />
          </Image>
        </Services>
      );
    };
  
const Services = styled(About)`
min-height: 90vh;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
h2 {
  padding-bottom: 5rem;
}
p {
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
}
@media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 1rem;
    margin: 1rem;
    
  }
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width: 1500px) {
  justify-content: center;
}
`;
const Card = styled.div`
flex-basis: 20rem;
.icon {
  display: flex;
  align-items: center;
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
}
@media (max-width: 1500px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;


export default ServicesSection