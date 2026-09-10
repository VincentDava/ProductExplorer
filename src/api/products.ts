import type { Product } from '../types/product'

const BASE_URL = 'https://fakestoreapi.com'

export async function fetchProducts(timeoutMs = 8000): Promise<Product[]> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(`${BASE_URL}/products`, { signal: controller.signal })
    if (!response.ok) {
      throw new Error(`Failed to fetch products (${response.status})`)
    }
    return await response.json()
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.')
    }
    throw err
  } finally {
    clearTimeout(timeout)
  }
}

export async function fetchProductById(id: number, timeoutMs = 8000): Promise<Product> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, { signal: controller.signal })
    if (!response.ok) {
      throw new Error(`Failed to fetch product (${response.status})`)
    }
    return await response.json()
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.')
    }
    throw err
  } finally {
    clearTimeout(timeout)
  }
}
