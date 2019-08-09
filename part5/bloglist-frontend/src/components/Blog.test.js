import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Blog from './Blog'

afterEach(cleanup)

test('renders content', () => {
  const blog = {
    title: 'Testing Title',
    author: 'Testing Author',
    likes:5
  }
  const mockHandler = jest.fn()
  const component = render(
    <Blog blog={blog} onClick={mockHandler} />
  )
  expect(component.container).toHaveTextContent(
    blog.title
  )
  expect(component.container.querySelector('.more-info')).toHaveStyle(
    'display:none'
  )
  expect(component.container).toHaveTextContent(
    blog.author
  )
  const button = component.container.querySelector('.show-info')
  fireEvent.click(button)
  expect(component.container.querySelector('.more-info')).toHaveStyle(
    'display:block'
  )
})