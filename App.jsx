import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
