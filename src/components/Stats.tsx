import './Stats.css'
import { useTranslation } from 'react-i18next'

export default function Stats() {
  const { t } = useTranslation()

  const stats = [
    {
      value: '10K+',
      label: t('stats.downloads'),
      icon: '📲',
      color: '#E53935',
    },
    { value: '4.8★', label: t('stats.rating'), icon: '⭐', color: '#E53935' },
    { value: '2', label: t('stats.languages'), icon: '🌍', color: '#E53935' },
    { value: '100%', label: t('stats.free'), icon: '🎁', color: '#E53935' },
  ]

  return (
    <section id="stats" className="section stats">
      <div className="container">
        <div className="stats__header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 20V10M12 20V4M6 20v-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {t('stats.badge')}
          </span>
          <h2 className="section-title">
            {t('stats.title')}
            <br />
            <span className="text-gradient">{t('stats.titleAccent')}</span>
          </h2>
        </div>

        <div className="stats__grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`stats-card animate-fade-in-up animate-delay-${i + 1}`}
            >
              <div className="stats-card__icon">{s.icon}</div>
              <div className="stats-card__value" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="stats-card__label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="stats__tech">
          <p className="stats__tech-label">{t('stats.builtWith')}</p>
          <div className="stats__tech-pills">
            {[
              'Flutter',
              'Dart',
              'Drift (SQLite)',
              'Riverpod',
              'fl_chart',
              'Google Fonts',
              'AdMob',
            ].map((t) => (
              <span key={t} className="stats__pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
