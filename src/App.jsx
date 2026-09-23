import styles from './App.module.scss'
import coffeePlaceholder from './assets/coffee-placeholder.svg'
import CafeImage from './components/CafeImage'
import ProductCard from './components/ProductCard'
import SectionHeader from './components/SectionHeader'
import { experience, highlights, menuSections, restaurant } from './data/menu'

function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>M</span>
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

        <a className={styles.secondaryAction} href={restaurant.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div>
            <p className={styles.eyebrow}>Café · brunch · bar · encuentros</p>
            <h1 id="hero-title" className={styles.heroTitle}>
              Lo cotidiano se disfruta <span className={styles.accent}>en Monet</span>.
            </h1>
            <p className={styles.heroDescription}>
              {restaurant.description} Vení a conocer una propuesta gastronómica cercana, con
              platos frescos y una atmósfera que invita a quedarse.
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
                <strong>{restaurant.branches.length} puntos en Tucumán</strong>
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
                alt="Plato fresco de brunch servido en Monet Coffee and Bar"
              />

              <div className={styles.visualInfo}>
                <strong>Brunch en Monet</strong>
                <span>Fresco · abundante · para compartir</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlights} aria-label="Destacados de Monet">
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
            title="Una carta para disfrutar"
            description="Sabores frescos, platos abundantes y bebidas para acompañar cada momento."
          />

          <div className={styles.menuGrid}>
            {menuSections.map((section) => (
              <article key={section.id} className={styles.menuPanel}>
                <div className={styles.panelHeader}>
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>

                <div className={styles.itemsList}>
                  {section.items.map((item) => (
                    <ProductCard key={item.name} item={item} styles={styles} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className={styles.storySection}>
          <SectionHeader
            styles={styles}
            eyebrow="Experiencia"
            title="Mucho más que un café"
            description="La identidad de Monet vive en sus espacios, su carta y esos momentos que dan ganas de repetir."
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
            <p className={styles.eyebrow}>Encontrá tu Monet</p>
            <h3>Tres direcciones, la misma forma de disfrutar.</h3>
            <p>
              Consultá horarios, disponibilidad y novedades desde Instagram antes de tu visita.
            </p>
          </div>

          <div className={styles.visitInfo}>
            {restaurant.branches.map((branch) => (
              <div className={styles.visitItem} key={branch}>
                <span>Sucursal Monet</span>
                <strong>{branch}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>
          <strong>{restaurant.name}</strong> · Café, brunch y buenos encuentros
        </span>
        <span>Desarrollado por AHX Digital</span>
      </footer>
    </div>
  )
}

export default App
