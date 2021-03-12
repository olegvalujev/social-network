import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

test('renders without crashing', () => {
  let container = document.createElement('div');
  document.body.appendChild(container);
  ReactDom.render(<App/>, container)
  ReactDom.unmountComponentAtNode(container)
})
