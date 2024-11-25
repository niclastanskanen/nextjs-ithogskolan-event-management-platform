import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DatePicker from '@/components/DatePicker'

describe('DatePicker', () => {
  it('shows placeholder when no date selected', () => {
    render(<DatePicker />)
    expect(screen.getByText('Pick a date')).toBeInTheDocument()
  })

  it('displays the selected date', () => {
    const testDate = new Date('2024-03-20')
    render(<DatePicker date={testDate} />)

    expect(screen.getByText(/March 20th, 2024/i)).toBeInTheDocument()
  })
})