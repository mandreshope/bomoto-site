import './Screenshots.css'
import { useTranslation } from 'react-i18next'

export default function Screenshots() {
  const { t } = useTranslation()

  const screens = [
    {
      label: t('screenshots.item1.label'),
      emoji: '🏠',
      title: t('screenshots.item1.title'),
      desc: t('screenshots.item1.desc'),
      color: '#E53935', // Red
    },
    {
      label: t('screenshots.item2.label'),
      emoji: '⛽',
      title: t('screenshots.item2.title'),
      desc: t('screenshots.item2.desc'),
      color: '#E53935',
    },
    {
      label: t('screenshots.item3.label'),
      emoji: '📊',
      title: t('screenshots.item3.title'),
      desc: t('screenshots.item3.desc'),
      color: '#E53935',
    },
    {
      label: t('screenshots.item4.label'),
      emoji: '🛢️',
      title: t('screenshots.item4.title'),
      desc: t('screenshots.item4.desc'),
      color: '#E53935',
    },
  ]

  return (
    <section id="screenshots" className="section screenshots">
      <div className="orb screenshots__orb"></div>
      <div className="container">
        <div className="screenshots__header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {t('screenshots.badge')}
          </span>
          <h2 className="section-title">
            {t('screenshots.title')}<br/>
            <span className="text-gradient">{t('screenshots.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">
            {t('screenshots.subtitle')}
          </p>
        </div>

        <div className="screenshots__grid">
          {screens.map((s, i) => (
            <div key={i} className="screenshot-card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
              <div className="screenshot-card__top" style={{ background: `${s.color}08`, borderBottom: `1px solid ${s.color}10` }}>
                <div className="screenshot-card__icon-wrap" style={{ border: `1px solid ${s.color}15` }}>
                  <span style={{ fontSize: '32px' }}>{s.emoji}</span>
                </div>
                <span className="screenshot-card__label" style={{ color: s.color }}>
                  {s.label}
                </span>
              </div>
              <div className="screenshot-card__body">
                <h3 className="screenshot-card__title">{s.title}</h3>
                <p className="screenshot-card__desc">{s.desc}</p>
              </div>
              <div className="screenshot-card__line"></div>
            </div>
          ))}
        </div>

        <div className="screenshots__cta">
          <div className="screenshots__cta-inner">
            <div className="screenshots__cta-text">
              <h3>{t('screenshots.ctaTitle')}</h3>
              <p>{t('screenshots.ctaText')}</p>
            </div>
            <div className="screenshots__cta-actions">
              <a href="#download" className="btn-primary">{t('navbar.download')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
