import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'containers/App';

let component;
const mockedJSON = [
  { id: "a5fhre85", title: "Breaking the pretzel market" }, 
  { id: "bhdtg37", title: "Shaving your bear: a complete guide" }
];
const titles = mockedJSON.map(record => record.title);

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://localhost:8080/api/v1/blog_posts/links', {
    status: 200,
    response: { 
      rows: mockedJSON
    }
  });
  component = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
  moxios.uninstall();
});

it('renders links to fetched posts with the correct text', (done) => {
  moxios.wait(() => {
    component.update();

    const postLinks = component.find('.post-links');
    expect(postLinks.length).toEqual(mockedJSON.length);
    
    postLinks.forEach(link => {
      expect(titles.includes(link.text())).toEqual(true);
    });

    done();
  });
});