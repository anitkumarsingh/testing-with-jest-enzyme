import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('should render with error',()=>{
    it('should render hello from header component',()=>{
        const component = shallow(<Header/>);
        console.log(component);
        const wraper = component.find('.headerComponent');
        expect(wraper.length).toBe(1);
    })
})