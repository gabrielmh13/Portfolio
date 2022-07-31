import './App.css';

import { useEffect, useState } from 'react';

import Navbar from './components/layout/Navbar'
import MobileNavbar from './components/layout/MobileNavbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';

function App() {

  const [bgNavbar, setBgNavbar] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const handleScroll = event => {
      window.scrollY > 0 ? (setBgNavbar(true)) : (setBgNavbar(false))
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [bgNavbar])

  useEffect(() => {
    if(window.screen.width < 720){
      setMobile(true)
    }
    else {
      setMobile(false)
    }

    const handleResize = event => {
      window.screen.width < 720 ? setMobile(true) : setMobile(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobile])

  return (
    <div>
      {mobile === true ? <MobileNavbar bgNavbar={bgNavbar}/> : <Navbar bgNavbar={bgNavbar}/>}
      <Home />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
