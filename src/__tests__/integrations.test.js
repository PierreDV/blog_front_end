import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Root from 'Root';
import App from 'components/App';
import Home from 'containers/Home';

let component;

beforeEach(() => {
  fetchMock.get(
    'http://localhost:8080/api/v1/blog_posts/links',
    { status: 200 }
  );
});

afterEach(() => {
  fetchMock.restore();
  component.unmount();
});

test('App should render Home component', () => {
  component = mount(
    <Root>
      <App />
    </Root>
  );

  expect(component.find(Home)).toHaveLength(1);
});