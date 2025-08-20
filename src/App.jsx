import Header from './components/Header'
import Hero from './components/Hero'
import EventFormat from './components/EventFormat'
import Schedule from './components/Schedule'
import Instructors from './components/Instructors'
import ProgramFormat from './components/ProgramFormat'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventFormat />
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
