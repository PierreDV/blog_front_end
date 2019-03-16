import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from 'components/App';
import Home from 'containers/Home';
import { testNameToKey } from 'jest-snapshot/build/utils';

test('App should render Home component', () => {
  const component = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(component.find(Home)).toHaveLength(1);
});