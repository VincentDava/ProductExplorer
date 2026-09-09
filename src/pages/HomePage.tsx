import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../api/products'
import { ErrorMessage } from '../components/ErrorMessage'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ProductCard } from '../components/ProductCard'
import { SearchBar } from '../components/SearchBar'
import type { Product } from '../types/product'
import './HomePage.css'

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchProducts()
      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return products
    return products.filter((product) =>
      product.title.toLowerCase().includes(query),
    )
  }, [products, search])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={loadProducts} />
  }

  return (
    <section className="home">
      <h1>Product Catalog</h1>
      <SearchBar value={search} onChange={setSearch} />
      {filteredProducts.length === 0 ? (
        <p className="home__empty">No products found.</p>
      ) : (
        <div className="home__grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
