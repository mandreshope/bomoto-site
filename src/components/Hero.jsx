import './Hero.css'
import mockupImg from '../assets/app-mockup.png'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      {/* Background orbs */}
      <div className="orb hero__orb-1"></div>
      <div className="orb hero__orb-2"></div>
      <div className="orb hero__orb-3"></div>

      {/* Grid pattern overlay */}
      <div className="hero__grid"></div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="animate-fade-in-up animate-delay-1">
            <span className="section-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
              </svg>
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="hero__title animate-fade-in-up animate-delay-2">
            {t('hero.title1')}<br/>
            <span className="text-gradient">{t('hero.title2')}</span><br/>
            {t('hero.title3')}
          </h1>

          <p className="hero__subtitle animate-fade-in-up animate-delay-3">
            {t('hero.subtitle')}
          </p>

          <div className="hero__actions animate-fade-in-up animate-delay-4">
            <a href="#download" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.43c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 3.96zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            <a href="#download" className="btn-primary hero__btn-android">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.341a.5.5 0 01-.857.35L14.5 13.5l-2.166 2.191a.5.5 0 01-.857-.35V8.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v6.841z"/>
                <path d="M7 7.5C7 5.015 9.015 3 11.5 3S16 5.015 16 7.5v1H7v-1zM5 10h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z"/>
              </svg>
              Google Play
            </a>
            <a href="#features" className="btn-secondary">
              {t('hero.learnMore')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="hero__trust animate-fade-in-up animate-delay-5">
            <div className="hero__trust-item">
              <div className="hero__stars">★★★★★</div>
              <span>4.8 / 5 {t('hero.rating')}</span>
            </div>
            <div className="hero__trust-sep"></div>
            <div className="hero__trust-item">
              <span className="hero__trust-count">10K+</span>
              <span>{t('hero.downloads')}</span>
            </div>
            <div className="hero__trust-sep"></div>
            <div className="hero__trust-item">
              <span className="hero__trust-count">{t('hero.free')}</span>
              <span>{t('hero.downloads')}</span>
            </div>
          </div>
        </div>

        <div className="hero__visual animate-fade-in-up animate-delay-3">
          <div className="hero__phone-wrapper">
            <div className="hero__phone-glow"></div>
            <div className="hero__phone">
              <div className="hero__screen">
                {/* App UI mockup */}
                <img src={mockupImg} alt="App Mockup" className="mockup-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
