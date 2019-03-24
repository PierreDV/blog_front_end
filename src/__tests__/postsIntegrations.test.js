import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://localhost:8080/api/v1/blog_posts/links', {
    status: 200,
    response: { 
      rows: [
        { id: "a5fhre85", title: "Breaking the pretzel market" }, 
        { id: "bhdtg37", title: "Shaving your bear: a complete guide" }
      ] 
    }
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('renders links to fetched posts', (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  moxios.wait(() => {
    component.update();
    expect(component.find('.post-links').length).toEqual(2);
    done();
    component.unmount();
  });
});