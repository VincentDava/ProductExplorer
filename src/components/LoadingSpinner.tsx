import './LoadingSpinner.css'

export function LoadingSpinner() {
  return (
    <div className="loading" role="status" aria-label="Loading">
      <div className="loading__spinner" />
      <p>Loading…</p>
    </div>
  )
}
