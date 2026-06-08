import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FocusAreas from './components/FocusAreas'
import Schedule from './components/Schedule'
import Instructors from './components/Instructors'
import Ambassadors from './components/Ambassadors'
import Partners from './components/Partners'
import Sponsors from './components/Sponsors'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { preloadImages } from './utils/performance'

function App() {
  // Preload critical images on app load
  useEffect(() => {
    const criticalImages = [
      '/images/hpc01.jpg',
      '/images/partners/deepbio.jpg',
      '/images/partners/chiral.jpg',
      '/images/speakers/jubayer.png',
      '/images/speakers/muhib.png',
      '/images/speakers/musab.png',
      '/images/speakers/pritom.png'
    ];

    preloadImages(criticalImages).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 dark text-white">
      <Header />
      <main>
        <Hero />
        <FocusAreas />
        <Schedule />
        <Instructors />
        <Ambassadors />
        <Partners />
        <Sponsors />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
