import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() })
}))

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('EventHub')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Browse Events')).toBeInTheDocument()
    expect(screen.getByText('Calendar')).toBeInTheDocument()
  })
})