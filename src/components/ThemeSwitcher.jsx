import styles from './ThemeSwitcher.module.scss'

function ThemeSwitcher({ themes, activeThemeId, onChange }) {
  return (
    <div className={styles.switcher} aria-label="Seleccionar demo">
      <span className={styles.label}>Demo</span>
      <div className={styles.options} role="group" aria-label="Clientes">
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={activeThemeId === theme.id ? styles.active : ''}
            type="button"
            aria-pressed={activeThemeId === theme.id}
            onClick={() => onChange(theme.id)}
          >
            {theme.shortName}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeSwitcher
