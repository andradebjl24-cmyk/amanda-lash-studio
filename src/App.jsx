import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Accessibility from './components/Accessibility';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <>
      {/* Accessibility Widget (Font resize, High Contrast) */}
      <Accessibility />

      {/* Floating WhatsApp Quick Link */}
      <WhatsAppButton />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Banner */}
        <Hero />

        {/* About Amanda Section */}
        <About />

        {/* Services & Procedures Cards */}
        <Services onSelectService={setSelectedService} />

        {/* Eyelash Extensions Benefits */}
        <Benefits />

        {/* Results / Before & After Slider Grid */}
        <Gallery />

        {/* Client Testimonials Slider */}
        <Testimonials />

        {/* Dynamic Booking Form */}
        <Booking 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />

        {/* Accordion FAQ */}
        <FAQ />
      </main>

      {/* Salon Contact and Footer info */}
      <Footer />
    </>
  );
}

export default App;
