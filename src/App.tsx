import { Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Link to="/" className="app__logo">
          ProductExplorer
        </Link>
      </header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
