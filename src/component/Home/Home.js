import React from 'react'
import About from '../About/About';
import Footer from '../footer/Footer';
import Navbar from '../Navbar/Navbar';
import Subjects from '../Subjects/Subjects';
import AskedQues from './AskedQues';
import HelpDesk from './HelpDesk';
import './home.css';
import Home_image from './Home_image';
import WelcomePage from './WelcomePage';

const Home = () => {
  return (
    <>
      <Navbar />
      <Home_image />
      <WelcomePage />
      <About />
      <HelpDesk />
      <AskedQues />
      <Subjects />
      <Footer/>

    </>
  )
}

export default Home;