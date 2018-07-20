import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('button Component', () => {
 
  // make our assertion and what we expect to happen 
  it('should render without throwing an error', () => {
    expect(shallow(<App />).find('form.login').exists()).toBe(true)
  })
  it('renders a email input', () => {
    expect(shallow(<App />).find('#email').length).toEqual(1)
   })
  it('renders a password input', () => {
    expect(shallow(<App />).find('#password').length).toEqual(1)
   })
 });