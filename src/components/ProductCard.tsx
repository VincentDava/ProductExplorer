import type { Product } from '../types/product'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h2 className="product-card__title">{product.title}</h2>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          <span className="product-card__rating">★ {product.rating.rate}</span>
        </div>
      </div>
    </article>
  )
}
