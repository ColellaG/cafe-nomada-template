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
          <span className={styles.brandMark}>CN</span>
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

        <a className={styles.secondaryAction} href="#reserva">
          Reservar mesa
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div>
            <p className={styles.eyebrow}>Café moderno · brunch · reuniones</p>
            <h1 id="hero-title" className={styles.heroTitle}>
              Café de barrio para <span className={styles.accent}>momentos reales</span>.
            </h1>
            <p className={styles.heroDescription}>
              Un espacio cálido para empezar el día, compartir un brunch y cerrar la tarde con
              una buena taza. {restaurant.name} combina cocina sencilla, café de especialidad y
              una atmósfera pensada para clientes del mundo real.
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
                <span>Horario</span>
                <strong>{restaurant.schedule}</strong>
              </div>
              <div className={styles.detailCard}>
                <span>Ubicación</span>
                <strong>{restaurant.address}</strong>
              </div>
              <div className={styles.detailCard}>
                <span>Contacto</span>
                <strong>{restaurant.phone}</strong>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.miniBadge}>☕ especialidad de la casa</div>
              <CafeImage
                className={styles.heroImage}
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"
                fallbackSrc={coffeePlaceholder}
                alt="Latte de vainilla servido en una taza de cerámica"
              />

              <div className={styles.visualInfo}>
                <strong>Latte de vainilla</strong>
                <span>Preparación cremosa · 12 oz</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlights} aria-label="Destacados del café">
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
            title="Para cada momento del día"
            description="Preparaciones pensadas para desayunos rápidos, brunches largos y sobremesas sin apuros."
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
            title="Una carta diseñada para acompañar"
            description="La propuesta combina café de calidad, platos bien hechos y una pausa que se siente auténtica."
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
            <p className={styles.eyebrow}>Reserva y visita</p>
            <h3>Un espacio para prolongar cada encuentro.</h3>
            <p>
              Pensado para clientes que buscan una experiencia casual y competente, con un servicio
              atento y una propuesta visual moderna para un negocio que quiere mostrarse bien.
            </p>
          </div>

          <div className={styles.visitInfo}>
            <div className={styles.visitItem}>
              <span>Dirección</span>
              <strong>{restaurant.address}</strong>
            </div>
            <div className={styles.visitItem}>
              <span>Horario</span>
              <strong>{restaurant.schedule}</strong>
            </div>
            <div className={styles.visitItem}>
              <span>Reservas</span>
              <strong>{restaurant.phone}</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>
          <strong>{restaurant.name}</strong> · Café de especialidad y brunch moderno
        </span>
        <span>Hecho para mostrar una propuesta premium.</span>
      </footer>
    </div>
  )
}

export default App
