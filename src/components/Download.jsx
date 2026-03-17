import './Download.css'
import logoImg from '../assets/bomoto.png'
import { useTranslation } from 'react-i18next'

export default function Download() {
  const { t } = useTranslation()

  return (
    <section id="download" className="section download">
      <div className="orb download__orb-1"></div>
      <div className="orb download__orb-2"></div>

      <div className="container">
        <div className="download__card">
          <div className="download__glow"></div>
          <div className="download__content">
            <div className="download__logo">
              <img src={logoImg} alt="Bomoto Logo" width="48" height="48" />
            </div>
            <h2 className="download__title">
              {t('download.title')} <span className="text-gradient">{t('download.titleAccent')}</span>
            </h2>
            <p className="download__subtitle">
              {t('download.subtitle')}
            </p>

            <div className="download__buttons">
              <a href="#" className="download__store-btn">
                <div className="download__store-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.43c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 3.96zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div className="download__store-text">
                  <span className="download__store-sub">{t('download.appleSub')}</span>
                  <span className="download__store-name">App Store</span>
                </div>
              </a>

              <a href="#" className="download__store-btn download__store-btn--android">
                <div className="download__store-icon">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341a.5.5 0 01-.857.35L14.5 13.5l-2.166 2.191a.5.5 0 01-.857-.35V8.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v6.841z"/>
                    <path d="M7 7.5C7 5.015 9.015 3 11.5 3S16 5.015 16 7.5v1H7v-1zM5 10h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z"/>
                  </svg>
                </div>
                <div className="download__store-text">
                  <span className="download__store-sub">{t('download.googleSub')}</span>
                  <span className="download__store-name">Google Play</span>
                </div>
              </a>
            </div>

            <div className="download__badges">
              <div className="download__badge">
                <span className="download__badge-icon">🔒</span>
                <span>{t('download.badge1')}</span>
              </div>
              <div className="download__badge">
                <span className="download__badge-icon">📱</span>
                <span>{t('download.badge2')}</span>
              </div>
              <div className="download__badge">
                <span className="download__badge-icon">💾</span>
                <span>{t('download.badge3')}</span>
              </div>
              <div className="download__badge">
                <span className="download__badge-icon">🌍</span>
                <span>{t('download.badge4')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
