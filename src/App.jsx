import { useEffect, Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { preloadImages } from './utils/performance'

// Lazy load non-critical sections
const FocusAreas = lazy(() => import('./components/FocusAreas'))
const Schedule = lazy(() => import('./components/Schedule'))
const Instructors = lazy(() => import('./components/Instructors'))
const Ambassadors = lazy(() => import('./components/Ambassadors'))
const Partners = lazy(() => import('./components/Partners'))
const Sponsors = lazy(() => import('./components/Sponsors'))
const Reviews = lazy(() => import('./components/Reviews'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

// Loading Placeholder
const SectionLoader = () => (
  <div className="h-48 flex items-center justify-center bg-black/20 animate-pulse rounded-3xl m-8 border border-white/5">
    <div className="w-12 h-12 border-2 border-red-500/20 border-t-red-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  // Preload only absolutely critical above-the-fold assets
  useEffect(() => {
    const criticalImages = [
      '/images/hpc01.jpg'
    ];

    preloadImages(criticalImages).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 dark text-white selection:bg-red-500/30">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <FocusAreas />
          <Schedule />
          <Instructors />
          <Ambassadors />
          <Partners />
          <Sponsors />
          <Reviews />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
