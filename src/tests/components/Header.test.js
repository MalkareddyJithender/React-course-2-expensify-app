import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';


test('should render header component',() =>
{
   //const renderer = new ReactShallowRenderer();
   //console.log(renderer.render(<Header />));
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
   
});