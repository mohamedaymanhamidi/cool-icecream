import { useState, useEffect } from 'react'
import './Gallery.css'

// import your images
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      image: img1,
      title: 'Ocean Berry Blast',
      description: 'Our signature blue raspberry treat',
      size: 'large',
    },
    {
      id: 2,
      image: img3,
      title: 'Our Colorful Truck',
      description: 'Rolling through the neighborhood',
      size: 'wide',
    },
    {
      id: 3,
      image: img2,
      title: 'Birthday Party Fun',
      description: 'Making special days even sweeter',
      size: 'normal',
    },
    {
      id: 4,
      image: img4,
      title: 'Mermaid Magic',
      description: 'Rainbow layers of wonder',
      size: 'normal',
    },
  ]

  // SAFE BODY SCROLL CONTROL
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [lightboxOpen])

  const openLightbox = (image) => {
    setCurrentImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImage(null)
  }

  return (
    <div className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1 className="gallery-title">Photo Gallery</h1>
          <p className="gallery-subtitle">Moments of joy, one scoop at a time</p>
        </div>
      </section>

      {/* GRID */}
      <section className="gallery-section section">
        <div className="gallery-grid">
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              className={`gallery-item ${image.size}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-visual">
                <img src={image.image} alt={image.title} />
              </div>

              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <span className="gallery-zoom">🔍 Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && currentImage && (
        <div className="lightbox" onClick={closeLightbox}>

          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="lightbox-img"
            />

            <div className="lightbox-info">
              <h2>{currentImage.title}</h2>
              <p>{currentImage.description}</p>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}

export default Gallery