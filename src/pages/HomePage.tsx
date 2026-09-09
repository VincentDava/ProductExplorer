import { useEffect, useState } from 'react'
import { fetchProducts } from '../api/products'
import { ProductCard } from '../components/ProductCard'
import type { Product } from '../types/product'
import './HomePage.css'

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => {
        setProducts([])
      })
  }, [])

  return (
    <section className="home">
      <h1>Product Catalog</h1>
      <div className="home__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
