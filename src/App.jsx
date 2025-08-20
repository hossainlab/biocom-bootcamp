import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Instructors from './components/Instructors'
import ProgramFormat from './components/ProgramFormat'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { preloadImages } from './utils/performance'

function App() {
  // Preload critical images on app load
  useEffect(() => {
    const criticalImages = [
      '/biocom-logo.svg',
      '/images/partners/deepbio.jpg',
      '/images/partners/chiral.jpg',
      '/images/speakers/jubayer.jpg',
      '/images/speakers/adib.jpg'
    ];
    
    preloadImages(criticalImages).catch(console.error);
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 dark">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Instructors />
        <ProgramFormat />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
