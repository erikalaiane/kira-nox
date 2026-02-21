import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'

function App() {
  return (
    <main className="bg-kira-bg min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
    </main>
  )
}

export default App