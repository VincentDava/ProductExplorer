import { Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <Link to="/" className="app__logo">
            <span className="app__logo-mark">P</span>
            ProductExplorer
          </Link>
          <p className="app__tagline">Browse products from Fake Store API</p>
        </div>
      </header>
      <main className="app__main">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <footer className="app__footer">
        <p>ProductExplorer · Fake Store API</p>
      </footer>
    </div>
  )
}

export default App
