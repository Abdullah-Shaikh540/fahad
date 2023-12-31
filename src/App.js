import React from 'react';
//import HeaderrWithText from './Components/HeaderWithText';
//import HeaderWithImage from './Components/HeaderWithImage';
import HeaderWithImageAndText from './Components/HeaderWithImageAndText';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import HorizontalImages from './Components/HorizontalImages.js';
import Button from './Components/Button.js';
import Card from './Components/Card.js';

let name = "Click Fahad";

function App() {
  return (
    <>
      <div>
        <HeaderWithImageAndText />
        <HeroSection />
        <Footer />
        <HorizontalImages />
        <Button text={name}></Button>
        <Card id={process.env.PUBLIC_URL + '/images/profile.jpg'}></Card>
      </div>
    </>
  );
}

export default App;
