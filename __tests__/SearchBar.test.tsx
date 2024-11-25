import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SearchBar from '@/components/SearchBar'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({ get: () => null })
}))

describe('SearchBar', () => {
  it('renders search input', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Search events...')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})