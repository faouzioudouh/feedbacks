import React from 'react';
import { shallow } from 'enzyme';
import CircleBadge from '../../../src/components/CircleBadge';

describe('component/CircleBadge', () => {
    it('should render the div container', () => {
        const wrapper = shallow(<CircleBadge />);
        expect(wrapper.isEmptyRender()).toBe(false);
        expect(wrapper.find('.CircleBadge').exists()).toBe(true);
        expect(wrapper.find('.CircleBadge').prop('tabIndex')).toBeUndefined();
    });

    it('should render the children', () => {
        const wrapper = shallow(<CircleBadge>test</CircleBadge>);
        expect(wrapper.isEmptyRender()).toBe(false);
        expect(wrapper.find('.CircleBadge').children().exists()).toBe(true);
        expect(wrapper.find('.CircleBadge').children().text()).toBe('test');
    });

    it('should render the container with extra class', () => {
        const wrapper = shallow(<CircleBadge className="extraClass" />);
        expect(wrapper.find('.CircleBadge').hasClass('extraClass')).toBe(true);
    });
});
