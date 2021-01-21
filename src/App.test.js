import React from "react";
import ReactDom from 'react-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const div = React.createElement('div')
  ReactDom.render(<App/>,div)
  ReactDom.unmountComponentAtNode(div)
});
