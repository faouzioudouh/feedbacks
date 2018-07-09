import React from 'react';
import { shallow } from 'enzyme';
import FeedbacksFilter from '../../../src/components/FeedbacksFilter/FeedbacksFilter';
import TextField from '../../../src/components/TextField';
import RatingsFilter from '../../../src/components/FeedbacksFilter/RatingsFilter';

describe('component/FeedbacksFilter', () => {
    const props = {
        searchInputProps: {
            placeholder: "Search here!",
            type: "search",
            value: "",
            onChange: jest.fn(),
        },
        ratingsFilterProps: {
            ratings: [1, 2, 3, 4, 5],
            activeRatings: [],
            onClick: jest.fn(),
        },
    };

    it('should render TextField with the correct props', () => {
        const wrapper = shallow(<FeedbacksFilter  {...props} />);
        expect(wrapper.find(TextField).exists()).toBe(true);
        expect(wrapper.find(TextField).props()).toEqual(props.searchInputProps);
    });

    it('should render RatingsFilter with the correct props', () => {
        const wrapper = shallow(<FeedbacksFilter  {...props} />);
        expect(wrapper.find(RatingsFilter).exists()).toBe(true);
        expect(wrapper.find(RatingsFilter).props()).toEqual(props.ratingsFilterProps);
    });
});