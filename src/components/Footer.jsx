import './Footer.css'
import logoImg from '../assets/bomoto.png'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="divider"></div>
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <img src={logoImg} alt="Bomoto Logo" width="28" height="28" />
            </div>
            <span className="footer__logo-text">Bomoto</span>
          </div>
          <p className="footer__tagline" dangerouslySetInnerHTML={{ __html: t('footer.tagline') }} />
          <div className="footer__social">
            <a href="https://github.com/mandreshope" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__group-title">{t('footer.group1')}</h4>
          <ul className="footer__links">
            <li><a href="#features">{t('navbar.features')}</a></li>
            <li><a href="#screenshots">{t('navbar.screenshots')}</a></li>
            <li><a href="#stats">{t('navbar.stats')}</a></li>
            <li><a href="#download">{t('navbar.download')}</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__group-title">{t('footer.group2')}</h4>
          <ul className="footer__links">
            <li><a href="#">Android</a></li>
            <li><a href="#">iOS</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__group-title">{t('footer.group3')}</h4>
          <ul className="footer__links">
            <li><a href="https://github.com/mandreshope" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="mailto:mandreshope@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Bomoto. All rights reserved.</p>
          <p>{t('footer.bottomText')}</p>
        </div>
      </div>
    </footer>
  )
}
