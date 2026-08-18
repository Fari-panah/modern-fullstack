import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'


test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Sara',
    url: 'https://example.com',
    likes: 10,
  }

  render(<Blog blog={blog}/>)

  const title = screen.getByText(
    'Component testing is done with react-testing-library'
  )
  expect(title).toBeDefined()

  const author = screen.getByText('Sara')
  expect(author).toBeDefined()

  const url = screen.queryByText('https://example.com')
  expect(url).toBeNull()

  const likes = screen.queryByText('likes 10')
  expect(likes).toBeNull()

})

test('shows URL and likes when view button is clicked', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Sara',
    url: 'https://example.com',
    likes: 10
  }

  render(<Blog blog={blog} />)

  const user = userEvent.setup()

  const viewButton = screen.getByText('view')
  await user.click(viewButton)

  const url = screen.getByText('https://example.com')
  expect(url).toBeDefined()

  const likes = screen.getByText('likes 10')
  expect(likes).toBeDefined()
})

test('like button is clicked twice', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Sara',
    url: 'https://example.com',
    likes: 10,
  /* user: {
      username: 'tester',
      name: 'Superuser',
      id: '00000000000ffffffffffffff'
    },*/
  }
  const mockHandler = vi.fn()

  render(<Blog blog={blog} increseLike={mockHandler} />)

  const user = userEvent.setup()

  const viewButton = screen.getByText('view')
  await user.click(viewButton)

  const button = screen.getByText('like')
  await user.click(button)
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(2)

}

)