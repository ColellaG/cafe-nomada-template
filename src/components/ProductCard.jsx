function ProductCard({ item, styles }) {
  return (
    <article className={styles.productCard}>
      <div className={styles.productHeader}>
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <span className={styles.productPrice}>{item.price}</span>
      </div>

      {item.tags && item.tags.length > 0 ? (
        <ul className={styles.productTags} aria-label={`${item.name} tags`}>
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

export default ProductCard
