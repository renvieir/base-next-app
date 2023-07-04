import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('render as expected', () => {
    render(<Home />)

    const heading = screen.getByText("Get started by editing")

    expect(heading).toBeInTheDocument()
  })
})
