import React from 'react';
import { shallow } from 'enzyme';
import FeedbacksList from '../../../src/components/Feedbacks/FeedbacksList';
import FeedbackItem from '../../../src/components/Feedbacks/FeedbackItem';
import CircleBadge from '../../../src/components/CircleBadge';

describe('component/FeedbacksList', () => {
    const props = {
        feedbacks: [{
            id: '1',
            highlightedComment: '',
            comment: 'comment',
            rating: 5,
            computed_browser: {
                Platform: 'MacOS',
                Browser: 'Chrome',
                Version: '65'
            },
            browser: {
                userAgent: '... Mobile',
            },
        }]
    };

    it('should render one FeedbackItem', () => {
        const wrapper = shallow(<FeedbacksList  {...props} />);
        expect(wrapper.find(FeedbackItem).length).toBe(1);
    });

    it('should pass the correct props to FeedbackItem', () => {
        const wrapper = shallow(<FeedbacksList  {...props} />);

        // Browser
        expect(wrapper.find(FeedbackItem).first().props().browser)
            .toEqual(<React.Fragment>Chrome<br />65</React.Fragment>);

        // Comment
        expect(wrapper.find(FeedbackItem).first().props().comment)
            .toEqual('comment');

        // Rating
        expect(wrapper.find(FeedbackItem).first().props().rating)
            .toEqual(<CircleBadge children={5} />);

        // Device
        expect(wrapper.find(FeedbackItem).first().props().device).toEqual('Mobile');
    });

    it('should render device as Desktop if user agent contains no Mobile keyword', () => {
        props.feedbacks[0].browser.userAgent = '... NotMobiiiiiile';
        const wrapper = shallow(<FeedbacksList {...props} />);
        expect(wrapper.find(FeedbackItem).first().props().device).toEqual('Desktop');
    });
});
