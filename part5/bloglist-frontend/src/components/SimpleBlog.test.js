import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders content', () => {
  const blog = {
    title: 'Testing Title',
    author: 'Testing Author',
    likes:5
  }

  const mockHandler = jest.fn()

  const component = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )
  const button = component.getByText('like')

  fireEvent.click(button)
  fireEvent.click(button)

  expect(component.container).toHaveTextContent(
    blog.title
  )
  expect(component.container).toHaveTextContent(
    blog.likes
  )
  expect(component.container).toHaveTextContent(
    blog.author
  )
  expect(mockHandler.mock.calls.length).toBe(2)
})