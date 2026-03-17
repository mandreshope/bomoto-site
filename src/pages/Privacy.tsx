import { useTranslation } from 'react-i18next'
import './Privacy.css'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-header">
          <h1 className="privacy-title">{t('privacy.title')}</h1>
          <p className="privacy-update">{t('privacy.lastUpdated')}</p>
        </div>

        <div className="privacy-content card">
          <p className="privacy-intro">{t('privacy.intro')}</p>

          <section className="privacy-section">
            <h2>{t('privacy.storage.title')}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t('privacy.storage.content').replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong>$1</strong>'
                ),
              }}
            />
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.thirdParty.title')}</h2>
            <ul>
              <li>{t('privacy.thirdParty.admob')}</li>
              <li>{t('privacy.thirdParty.notifications')}</li>
            </ul>
            <div className="privacy-links">
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-link"
              >
                {t('privacy.links.admob')}
              </a>
            </div>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.rights.title')}</h2>
            <p>{t('privacy.rights.content')}</p>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.permissions.title')}</h2>
            <ul>
              <li>{t('privacy.permissions.internet')}</li>
              <li>{t('privacy.permissions.storage')}</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.children.title')}</h2>
            <p>{t('privacy.children.content')}</p>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.accounts.title')}</h2>
            <p>{t('privacy.accounts.content')}</p>
          </section>

          <section className="privacy-section">
            <h2>{t('privacy.contact.title')}</h2>
            <p>{t('privacy.contact.content')}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
