import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Works from './components/Works'

function App() {
  return (
    <main className="bg-kira-bg min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Works />
    </main>
  )
}

export default App