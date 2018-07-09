import React from 'react';
import { shallow } from 'enzyme';
import FilterItems from '../../../src/components/FeedbacksFilter/FilterItems';
import FilterItem from '../../../src/components/FeedbacksFilter/FilterItem';

describe('component/FilterItems', () => {
    const props = {
        items: [1, 2, 3, 4, 5],
        activeItems: [2],
        onClick: jest.fn(),
    };

    it('should render five FilterItem', () => {
        const wrapper = shallow(<FilterItems  {...props} />);
        expect(wrapper.find(FilterItem).length).toBe(5);
    });

    it('should pass correct props to FilterItem', () => {
        const wrapper = shallow(<FilterItems  {...props} />);
        expect(wrapper.find(FilterItem).first().prop('isActive')).toBe(false);
        expect(wrapper.find(FilterItem).first().prop('item')).toBe(1);
        expect(typeof wrapper.find(FilterItem).first().prop('onClick')).toBe('function');
    });

    it('should pass correct active props to FilterItem', () => {
        const wrapper = shallow(<FilterItems  {...props} />);
        expect(wrapper.find(FilterItem).at(1).prop('isActive')).toBe(true);
    });
});
