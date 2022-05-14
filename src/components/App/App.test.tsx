import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

const Comp = () => (
  <>
    Hello
  </>
)

const renderApp = (props = {}) => render(
  <Comp />
)

it('renders correctly', () => {
  const { screen } = renderApp();

  console.log('Hi')

  screen.debug()
});
