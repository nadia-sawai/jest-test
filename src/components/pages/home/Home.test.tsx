import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('HOME Render', () => {
  // h1タグがあるかのテスト
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  // homeというテキストがあるかのテスト（最後のi は、大文字小文字許容）
  test('renders a heading text', () => {
    render(<Home />)
    const headingText = screen.getByText(/home/i)
    expect(headingText).toBeInTheDocument()
  })

  // リンクのテキスト・href・relが正しいかのテスト（$は末尾一致）
  test('renders a correct link', () => {
    render(<Home />)

    const link = screen.getByRole('link', { name: /About$/i})

    expect(link).toHaveAttribute('href', "/about")
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})