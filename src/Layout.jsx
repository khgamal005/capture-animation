import Nav from './components/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import { AnimatePresence } from 'framer-motion';



const Layout = () => {
  const location = useLocation();

  return (
    <>
    <GlobalStyle/>
    <Nav  location={location} key={location.pathname}/>
    <Outlet/>
   
    </>
  )
}

export default Layout