import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let component;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://localhost:8080/api/v1/blog_posts/links', { 
    status: 200,
    rows: [{ id: "a5fhre85", title: "Breaking the pretzel market" }]
  });

 
});

afterEach(() => {

  moxios.uninstall();
});

it('renders links to fetched posts', (done) => {
  component = mount(
    <Root>
      <App />
    </Root>
  );
  
  moxios.wait(() => {
    component.update();
    expect(component.find('.post-links')).toHaveLength(1);
    done();
  });
});