import React from 'react';
import { shallow } from 'enzyme';
import FeedbacksFilter from '../../../src/components/FeedbacksFilter/FeedbacksFilter';
import TextField from '../../../src/components/TextField';
import FilterItems from '../../../src/components/FeedbacksFilter/FilterItems';

describe('component/FeedbacksFilter', () => {
    const props = {
        searchInputProps: {
            placeholder: "Search here!",
            type: "search",
            value: "",
            onChange: jest.fn(),
        },
        FilterItemsProps: {
            itens: [1, 2, 3, 4, 5],
            activeItems: [],
            onClick: jest.fn(),
        },
    };

    it('should render TextField with the correct props', () => {
        const wrapper = shallow(<FeedbacksFilter  {...props} />);
        expect(wrapper.find(TextField).exists()).toBe(true);
        expect(wrapper.find(TextField).props()).toEqual(props.searchInputProps);
    });

    it('should render FilterItems with the correct props', () => {
        const wrapper = shallow(<FeedbacksFilter  {...props} />);
        expect(wrapper.find(FilterItems).length).toBe(2);
        expect(wrapper.find(FilterItems).first().props()).toEqual(props.FilterItemsProps);
    });
});