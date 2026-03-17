import './Features.css'
import { useTranslation } from 'react-i18next'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: '⛽',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      title: t('features.item1.title'),
      description: t('features.item1.desc'),
    },
    {
      icon: '🛢️',
      gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
      title: t('features.item2.title'),
      description: t('features.item2.desc'),
    },
    {
      icon: '📊',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      title: t('features.item3.title'),
      description: t('features.item3.desc'),
    },
    {
      icon: '💰',
      gradient: 'linear-gradient(135deg, #10b981, #34d399)',
      title: t('features.item4.title'),
      description: t('features.item4.desc'),
    },
  ]

  return (
    <section id="features" className="section features">
      <div className="features__bg-orb orb"></div>
      <div className="container">
        <div className="features__header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="currentColor"
              />
            </svg>
            {t('features.badge')}
          </span>
          <h2 className="section-title">
            {t('features.title')}
            <br />
            <span className="text-gradient">{t('features.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass-card feature-card animate-fade-in-up animate-delay-${(i % 3) + 1}`}
            >
              <div
                className="feature-card__icon"
                style={{ background: f.gradient }}
              >
                <span>{f.icon}</span>
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.description}</p>
              <div className="feature-card__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
