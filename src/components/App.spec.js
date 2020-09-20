import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setUp = (props = {}) => {
    const component = shallow(<App {...props} />);
    return component;
}

describe('App component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = component.find('.App');
        expect(wrapper.length).toBe(1);
    });
});