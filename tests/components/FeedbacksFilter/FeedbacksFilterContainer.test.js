import React from 'react';
import { shallow } from 'enzyme';
import FeedbacksFilterContainer from '../../../src/components/FeedbacksFilter/FeedbacksFilterContainer';
import FeedbacksFilter from '../../../src/components/FeedbacksFilter/FeedbacksFilter';

describe('component/FeedbacksFilterContainer', () => {
    const props = {
        render: jest.fn(),
        feedbacks: [{
                rating: 1,
                comment: 'hello',
            },{
                rating: 2,
                comment: 'hi',
            }],
    };

    beforeEach(() => {
        props.render.mockReset();
    })

    it('should render the FeedbacksFilter with correct props', () => {
        const wrapper = shallow(<FeedbacksFilterContainer  {...props} />);
        expect(wrapper.find(FeedbacksFilter).exists()).toBe(true);
        expect(wrapper.find(FeedbacksFilter).prop('searchInputProps')).toEqual({
            placeholder: "Search here!",
            type: "search",
            value: "",
            onChange: wrapper.instance().onSearchChange
        });

        expect(wrapper.find(FeedbacksFilter).prop('ratingsFilterProps')).toEqual({
            ratings: [1, 2, 3, 4, 5],
            activeRatings: [],
            onClick: wrapper.instance().onRatingClick
        });
    });


    it('should call the (props.render) function with filtered feedbacks as arguemnt', () => {
        shallow(<FeedbacksFilterContainer  {...props} />);

        expect(props.render).toBeCalledWith(props.feedbacks);
    });

    it('should filter feedbacks by ratings, on ratings button click', () => {
        const wrapper = shallow(<FeedbacksFilterContainer  {...props} />);
        props.render.mockReset();
        wrapper.instance().onRatingClick(1);
        expect(props.render).toBeCalledWith([props.feedbacks[0]]);
    });

    it('should filter feedbacks by comment, on search change', () => {
        const wrapper = shallow(<FeedbacksFilterContainer  {...props} />);
        props.render.mockReset();
        wrapper.instance().onSearchChange({
            target: {
                value: 'hi'
            },
        });

        expect(props.render).toBeCalledWith([{
            rating: 2,
            comment: 'hi',
            highlightedComment: '<mark>hi</mark>'
        }]);
    });
});
