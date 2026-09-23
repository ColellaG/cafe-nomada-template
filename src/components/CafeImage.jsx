import { useState } from 'react'

function CafeImage({ src, fallbackSrc, alt, className }) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      loading="eager"
      fetchPriority="high"
      onError={() => {
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc)
        }
      }}
    />
  )
}

export default CafeImage
