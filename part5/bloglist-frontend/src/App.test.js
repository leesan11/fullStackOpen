import React from 'react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react'

jest.mock('./services/blogs')
import App from './App'

afterEach(cleanup)

test('renders content', async () => {
  let component
  act(async ()=>{
    component = render(
      <App />
    )
  })
  
  await waitForElement(
    () => component.getByText('login')
  ) 

  

  expect(component.container.querySelector('.login-form')).toBeInTheDocument()
//   expect(component.container.querySelector('.more-info')).toHaveStyle(
//     'display:none'
//   )
//   expect(component.container).toHaveTextContent(
//     blog.author
//   )
//   const button = component.container.querySelector('.show-info')
//   fireEvent.click(button)
//   expect(component.container.querySelector('.more-info')).toHaveStyle(
//     'display:block'
//   )
})