import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Stats from './components/Stats'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="divider"></div>
        <Features />
        <div className="divider"></div>
        <Screenshots />
        <div className="divider"></div>
        <Stats />
        <div className="divider"></div>
        <Download />
      </main>
      <Footer />
    </div>
  )
}

export default App
