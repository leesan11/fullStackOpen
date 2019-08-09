import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, waitForElement } from '@testing-library/react'

jest.mock('./services/blogs')
import App from './App'

afterEach(cleanup)

test('renders content', async () => {

  const user = {
    username: 'test',
    token: '1231231214',
    name: 'Donald Tester',
    uid:1
  }

  const component = render(
    <App user={user} />
  )
    
  localStorage.setItem('loggedBlogUser', JSON.stringify(user))
  component.rerender(<App />)
  
  await waitForElement(
    () => component.findAllByText("Title",{exact:false})
  ) 
  const blogs = component.container.querySelectorAll('.show-info')
  
  expect(blogs.length).toBe(3) 

})