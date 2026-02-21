import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Works from './components/Works'
import Process from './components/Process'

function App() {
  return (
    <main className="bg-kira-bg min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Works />
      <Process />
    </main>
  )
}

export default App