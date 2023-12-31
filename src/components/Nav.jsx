import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url)


  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
          <Line
             transition={{ duration: 0.75 }}
             initial={{ width: '0%' }}
             animate={{ width: url === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
             transition={{ duration: 0.75 }}
             initial={{ width: '0%' }}
             animate={{ width: url === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/contact">1. Contact Us</Link>
          <Line
             transition={{ duration: 0.75 }}
             initial={{ width: '0%' }}
             animate={{ width: url === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  @media (max-width: 789px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 789px) {
    left: 0%;
  }
`;

export default Nav;
