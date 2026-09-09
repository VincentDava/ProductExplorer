import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchProductById } from '../api/products'
import type { Product } from '../types/product'
import './ProductDetailPage.css'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null | undefined>(undefined)

  useEffect(() => {
    const productId = Number(id)
    if (Number.isNaN(productId)) {
      setProduct(null)
      return
    }

    fetchProductById(productId)
      .then(setProduct)
      .catch(() => {
        setProduct(null)
      })
  }, [id])

  if (!product) {
    return (
      <div className="detail-page">
        <Link to="/" className="detail-page__back">
          ← Back to catalog
        </Link>
        <p>Product not found.</p>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <Link to="/" className="detail-page__back">
        ← Back to catalog
      </Link>
      <article className="detail">
        <div className="detail__image-wrap">
          <img src={product.image} alt={product.title} className="detail__image" />
        </div>
        <div className="detail__content">
          <span className="detail__category">{product.category}</span>
          <h1 className="detail__title">{product.title}</h1>
          <p className="detail__price">${product.price.toFixed(2)}</p>
          <p className="detail__rating">
            ★ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="detail__description">{product.description}</p>
        </div>
      </article>
    </div>
  )
}
