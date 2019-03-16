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
  component = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
  fetchMock.restore();
});

test('App should render Home component', () => {
  expect(component.find(Home)).toHaveLength(1);
});