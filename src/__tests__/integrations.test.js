import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Root from 'Root';
import App from 'components/App';
import Home from 'containers/Home';

beforeEach(() => {
  fetchMock.get(
    'http://localhost:8080/api/v1/blog_posts/links',
    200
  );
});

test('App should render Home component', () => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  expect(component.find(Home)).toHaveLength(1);
});