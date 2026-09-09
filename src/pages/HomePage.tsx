import { useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../api/products'
import { ProductCard } from '../components/ProductCard'
import { SearchBar } from '../components/SearchBar'
import type { Product } from '../types/product'
import './HomePage.css'

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => {
        setProducts([])
      })
  }, [])

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return products
    return products.filter((product) =>
      product.title.toLowerCase().includes(query),
    )
  }, [products, search])

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
