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
    { 
      status: 200,
      rows: [{ id: "a5fhre85", title: "Breaking the pretzel market" }]
    }
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

it('renders links to fetched posts', (done) => {
  setTimeout(() => {
    component.update();
    expect(component.find('.post-links')).toHaveLength(1);
    done();
  }, 100)
});