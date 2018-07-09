import React from 'react';
import { shallow } from 'enzyme';
import RatingsFilter from '../../../src/components/FeedbacksFilter/RatingsFilter';
import RatingFilter from '../../../src/components/FeedbacksFilter/RatingFilter';

describe('component/RatingsFilter', () => {
    const props = {
        ratings: [1, 2, 3, 4, 5],
        activeRatings: [2],
        onClick: jest.fn(),
    };

    it('should render five RatingFilter', () => {
        const wrapper = shallow(<RatingsFilter  {...props} />);
        expect(wrapper.find(RatingFilter).length).toBe(5);
    });

    it('should pass correct props to RatingFilter', () => {
        const wrapper = shallow(<RatingsFilter  {...props} />);
        expect(wrapper.find(RatingFilter).first().prop('isActive')).toBe(false);
        expect(wrapper.find(RatingFilter).first().prop('rating')).toBe(1);
        expect(typeof wrapper.find(RatingFilter).first().prop('onClick')).toBe('function');
    });

    it('should pass correct active props to RatingFilter', () => {
        const wrapper = shallow(<RatingsFilter  {...props} />);
        expect(wrapper.find(RatingFilter).at(1).prop('isActive')).toBe(true);
    });
});
