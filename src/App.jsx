import { useEffect, useMemo, useState } from 'react'
import styles from './App.module.scss'
import coffeePlaceholder from './assets/coffee-placeholder.svg'
import CafeImage from './components/CafeImage'
import ProductCard from './components/ProductCard'
import SectionHeader from './components/SectionHeader'
import ThemeSwitcher from './components/ThemeSwitcher'
import { defaultThemeId, themes } from './config/themes'

function buildThemeStyle(theme) {
  return Object.fromEntries(
    Object.entries(theme.theme).flatMap(([name, value]) => [
      [`--${name}`, value],
      [`--theme-${name}`, value],
    ]),
  )
}

function App() {
  const [activeThemeId, setActiveThemeId] = useState(defaultThemeId)
  const activeTheme = useMemo(
    () => themes.find((theme) => theme.id === activeThemeId) ?? themes[0],
    [activeThemeId],
  )
  const [openMenuId, setOpenMenuId] = useState(activeTheme.menuSections[0].id)
  const { content, restaurant } = activeTheme

  useEffect(() => {
    document.title = `${activeTheme.name} · ${content.menuTitle}`
  }, [activeTheme, content.menuTitle])

  const handleThemeChange = (themeId) => {
    const nextTheme = themes.find((theme) => theme.id === themeId) ?? themes[0]
    setActiveThemeId(nextTheme.id)
    setOpenMenuId(nextTheme.menuSections[0].id)
  }

  const contactHref = restaurant.phone.startsWith('+')
    ? `https://wa.me/${restaurant.phone.replace(/\D/g, '')}`
    : restaurant.instagram

  return (
    <div className={styles.page} style={buildThemeStyle(activeTheme)}>
      <div className={styles.backgroundEmblem} aria-hidden="true">
        <span />
      </div>

      <header className={styles.header}>
        <div className={styles.brand}>
          {activeTheme.assets.logo ? (
            <img className={styles.brandLogo} src={activeTheme.assets.logo} alt={`${activeTheme.name} logo`} />
          ) : (
            <span className={styles.brandMark} aria-hidden="true">{activeTheme.shortName.slice(0, 1)}</span>
          )}
          <div>
            <p className={styles.brandName}>{activeTheme.name}</p>
            <p className={styles.brandMeta}>{restaurant.slogan}</p>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Navegación principal">
          <a href="#menu">Menú</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#reserva">Reserva</a>
        </nav>

        <a className={styles.secondaryAction} href={contactHref} target="_blank" rel="noreferrer">
          {restaurant.phone.startsWith('+') ? 'WhatsApp' : 'Instagram'}
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h1 id="hero-title" className={styles.heroTitle}>
              {content.heroTitle} <span className={styles.accent}>{content.heroAccent}</span>.
            </h1>
            <p className={styles.heroDescription}>{content.heroDescription}</p>

            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#menu">Ver menú</a>
              <a className={styles.secondaryAction} href="#experiencia">Nuestra experiencia</a>
            </div>

            <div className={styles.heroDetails}>
              <div className={styles.detailCard}><span>Horarios</span><strong>{restaurant.schedule}</strong></div>
              <div className={styles.detailCard}><span>Sucursales</span><strong>{restaurant.branches.length} {restaurant.branches.length === 1 ? 'dirección' : 'sucursales'}</strong></div>
              <div className={styles.detailCard}><span>Instagram</span><strong>{restaurant.instagramHandle}</strong></div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.miniBadge}>{content.visualBadge}</div>
              <CafeImage
                className={styles.heroImage}
                src={activeTheme.assets.hero}
                fallbackSrc={coffeePlaceholder}
                alt={content.heroAlt}
              />
              <div className={styles.visualInfo}>
                <strong>{content.visualTitle}</strong>
                <span>{content.visualMeta}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlights} aria-label={`Destacados de ${activeTheme.name}`}>
          {activeTheme.highlights.map((item) => (
            <article key={item.title} className={styles.highlightCard}>
              <h3>{item.title}</h3>
              <strong>{item.value}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section id="menu" className={styles.menuSection}>
          <SectionHeader styles={styles} eyebrow={content.menuEyebrow} title={content.menuTitle} description={content.menuDescription} />
          <div className={styles.menuGrid}>
            {activeTheme.menuSections.map((section) => {
              const isOpen = openMenuId === section.id
              const panelId = `menu-panel-${section.id}`
              return (
                <article key={section.id} className={`${styles.menuPanel} ${isOpen ? styles.menuPanelOpen : ''}`}>
                  <button className={styles.panelToggle} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenMenuId(isOpen ? '' : section.id)}>
                    <span className={styles.panelHeader}>
                      <span><span className={styles.panelTitle}>{section.title}</span><span className={styles.panelDescription}>{section.description}</span></span>
                      <span className={styles.panelIcon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </span>
                  </button>
                  <div className={styles.itemsList} id={panelId} hidden={!isOpen}>
                    {section.items.map((item) => <ProductCard key={item.name} item={item} styles={styles} />)}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="experiencia" className={styles.storySection}>
          <SectionHeader styles={styles} eyebrow={content.experienceEyebrow} title={content.experienceTitle} description={content.experienceDescription} />
          <div className={styles.storyGrid}>
            {activeTheme.experience.map((feature) => <article key={feature.title} className={styles.storyCard}><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
          </div>
        </section>

        <section id="reserva" className={styles.visitCard} aria-label={`Información de ${activeTheme.name}`}>
          <div>
            <p className={styles.eyebrow}>{content.visitEyebrow}</p>
            <h3>{content.visitTitle}</h3>
            <p>{content.visitDescription}</p>
          </div>
          <div className={styles.visitInfo}>
            {restaurant.branches.map((branch) => (
              <a className={styles.visitItem} href={branch.mapsUrl} target="_blank" rel="noreferrer" key={branch.address}>
                <span>{content.branchLabel}</span>
                <strong>{branch.name}</strong>
                <small>{branch.address}</small>
                <span className={styles.visitLink}>Ver ubicación ↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span><strong>{activeTheme.name}</strong> · {restaurant.slogan}</span>
        <span>Demostración interactiva por AHX Studio</span>
      </footer>

      <ThemeSwitcher themes={themes} activeThemeId={activeTheme.id} onChange={handleThemeChange} />
    </div>
  )
}

export default App
