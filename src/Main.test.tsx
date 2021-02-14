import {render, screen} from '@testing-library/react'
import {Main} from './Main'

test('renders main page', () => {
  render(<Main />)
  const mainDiv = screen.getByText(/Main/i)
  expect(mainDiv).toBeInTheDocument()
})
