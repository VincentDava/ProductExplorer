import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search products by title…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search products"
      />
    </div>
  )
}
