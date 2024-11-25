import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import EventCategories from '@/components/EventCategories'

describe('EventCategories', () => {
  it('renders all category buttons', () => {
    const mockOnCategoryChange = jest.fn()
    render(
      <EventCategories 
        selectedCategory="" 
        onCategoryChange={mockOnCategoryChange} 
      />
    )
    
    expect(screen.getByText('All Events')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Sports')).toBeInTheDocument()
  })

  it('calls onCategoryChange when clicking a category', () => {
    const mockOnCategoryChange = jest.fn()
    render(
      <EventCategories 
        selectedCategory="" 
        onCategoryChange={mockOnCategoryChange} 
      />
    )
    
    fireEvent.click(screen.getByText('Music'))
    expect(mockOnCategoryChange).toHaveBeenCalled()
  })
})