import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  resultCount: number
  totalCount: number
}

export function SearchBar({ value, onChange, resultCount, totalCount }: SearchBarProps) {
  return (
    <div className="search">
      <div className="search__field">
        <svg className="search__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          className="search__input"
          placeholder="Search products by title…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search products"
        />
        {value && (
          <button
            type="button"
            className="search__clear"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <p className="search__count">
        Showing {resultCount} of {totalCount} products
      </p>
    </div>
  )
}
