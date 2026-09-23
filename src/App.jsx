import { useState } from 'react'
import styles from './App.module.scss'
import coffeePlaceholder from './assets/coffee-placeholder.svg'
import nabuLogo from './assets/nabu-logo.jpg'
import CafeImage from './components/CafeImage'
import ProductCard from './components/ProductCard'
import SectionHeader from './components/SectionHeader'
import { experience, highlights, menuSections, restaurant } from './data/menu'

function App() {
  const [openMenuId, setOpenMenuId] = useState(menuSections[0].id)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img className={styles.brandLogo} src={nabuLogo} alt="nabu.cafe" />
          <div>
            <p className={styles.brandName}>{restaurant.name}</p>
            <p className={styles.brandMeta}>{restaurant.slogan}</p>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Navegación principal">
          <a href="#menu">Menú</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#reserva">Reserva</a>
        </nav>

        <a className={styles.secondaryAction} href={`https://wa.me/${restaurant.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div>
            <p className={styles.eyebrow}>Café de especialidad · calma · encuentros</p>
            <h1 id="hero-title" className={styles.heroTitle}>
              Una pausa pensada <span className={styles.accent}>con calma</span>.
            </h1>
            <p className={styles.heroDescription}>
              {restaurant.description} Vení a conocer una propuesta cercana, con sabores
              simples, café rico y una atmósfera que invita a quedarse.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#menu">
                Ver menú
              </a>
              <a className={styles.secondaryAction} href="#experiencia">
                Nuestra experiencia
              </a>
            </div>

            <div className={styles.heroDetails}>
              <div className={styles.detailCard}>
                <span>Horarios</span>
                <strong>{restaurant.schedule}</strong>
              </div>
              <div className={styles.detailCard}>
                <span>Sucursales</span>
                <strong>{restaurant.branches[0].address}</strong>
              </div>
              <div className={styles.detailCard}>
                <span>Instagram</span>
                <strong>{restaurant.instagramHandle}</strong>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.miniBadge}>☕ especialidad de la casa</div>
              <CafeImage
                className={styles.heroImage}
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
                fallbackSrc={coffeePlaceholder}
                alt="Plato fresco de brunch servido en nabu.cafe"
              />

              <div className={styles.visualInfo}>
                <strong>Una pausa nabu</strong>
                <span>Calma · café · algo rico</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlights} aria-label="Destacados de nabu.cafe">
          {highlights.map((item) => (
            <article key={item.title} className={styles.highlightCard}>
              <h3>{item.title}</h3>
              <strong>{item.value}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section id="menu" className={styles.menuSection}>
          <SectionHeader
            styles={styles}
            eyebrow="Menú"
            title="Una carta para disfrutar sin prisa"
            description="Café, brunch y pastelería para acompañar cada momento con calma."
          />

          <div className={styles.menuGrid}>
            {menuSections.map((section) => {
              const isOpen = openMenuId === section.id
              const panelId = `menu-panel-${section.id}`

              return (
                <article
                  key={section.id}
                  className={`${styles.menuPanel} ${isOpen ? styles.menuPanelOpen : ''}`}
                >
                  <button
                    className={styles.panelToggle}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenMenuId(isOpen ? '' : section.id)}
                  >
                    <span className={styles.panelHeader}>
                      <span>
                        <span className={styles.panelTitle}>{section.title}</span>
                        <span className={styles.panelDescription}>{section.description}</span>
                      </span>
                      <span className={styles.panelIcon} aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </span>
                  </button>

                  <div className={styles.itemsList} id={panelId} hidden={!isOpen}>
                    {section.items.map((item) => (
                      <ProductCard key={item.name} item={item} styles={styles} />
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="experiencia" className={styles.storySection}>
          <SectionHeader
            styles={styles}
            eyebrow="Experiencia"
            title="Un café pensado con calma"
            description="La identidad de nabu.cafe está en los detalles, la pausa y los encuentros que se disfrutan de verdad."
          />

          <div className={styles.storyGrid}>
            {experience.map((feature) => (
              <article key={feature.title} className={styles.storyCard}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="reserva" className={styles.visitCard} aria-label="Información del local">
          <div>
            <p className={styles.eyebrow}>Encontrá nabu.cafe</p>
            <h3>Tu pausa empieza en nabu.</h3>
            <p>
              Consultá horarios, disponibilidad y novedades desde Instagram antes de tu visita.
            </p>
          </div>

          <div className={styles.visitInfo}>
            {restaurant.branches.map((branch) => (
              <a
                className={styles.visitItem}
                href={branch.mapsUrl}
                target="_blank"
                rel="noreferrer"
                key={branch.address}
              >
                <span>Visitanos</span>
                <strong>{branch.name}</strong>
                <small>{branch.address}</small>
                <span className={styles.visitLink}>Ver ubicación ↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>
          <strong>{restaurant.name}</strong> · Café pensado con calma
        </span>
        <span>Desarrollado por AHX Digital</span>
      </footer>
    </div>
  )
}

export default App
