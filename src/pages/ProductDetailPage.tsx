import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchProductById } from '../api/products'
import { ErrorMessage } from '../components/ErrorMessage'
import { LoadingSpinner } from '../components/LoadingSpinner'
import type { Product } from '../types/product'
import './ProductDetailPage.css'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadProduct = async (productId: number) => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchProductById(productId)
      setProduct(data)
    } catch (err) {
      setProduct(null)
      setError(err instanceof Error ? err.message : 'Failed to load product')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const productId = Number(id)
    if (Number.isNaN(productId)) {
      setError('Invalid product ID')
      setLoading(false)
      return
    }
    loadProduct(productId)
  }, [id])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error || !product) {
    return (
      <div className="detail-page">
        <Link to="/" className="detail-page__back">
          ← Back to catalog
        </Link>
        <ErrorMessage
          message={error ?? 'Product not found'}
          onRetry={() => {
            const productId = Number(id)
            if (!Number.isNaN(productId)) {
              loadProduct(productId)
            }
          }}
        />
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
