import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import Stats from '../components/Stats'
import Download from '../components/Download'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const scrollToId = params.get('scroll')

    if (scrollToId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToId)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }, 100) // Delay to ensure component is rendered
    }
  }, [location])

  return (
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
  )
}
