import React from 'react';
import { shallow } from 'enzyme';
import FeedbackItem from '../../../src/components/Feedbacks/FeedbackItem';

describe('component/FeedbackItem', () => {
    const props = {
        id: 1,
        highlightedComment: 'highlightedComment',
        comment: 'comment',
        rating: 5,
        device: 'mobile',
        browser: 'browser',
        platform: 'MAcOS',
    };

    it('should render all the cells', () => {
        const wrapper = shallow(<FeedbackItem  {...props} />);
        expect(wrapper.find('.FeedbackItem__cell').length).toBe(5);

        // rating
        expect(wrapper.find('.FeedbackItem__cell').at(0).text()).toBe('5');

        // comment
        expect(wrapper.find('.FeedbackItem__cell').at(1).prop('dangerouslySetInnerHTML'))
            .toEqual({__html: 'comment'});
        
        expect(wrapper.find('.FeedbackItem__cell').at(1).hasClass('FeedbackItem__cell--comment'))
            .toBe(true);

        // browser
        expect(wrapper.find('.FeedbackItem__cell').at(2).text()).toBe('browser');

        // device
        expect(wrapper.find('.FeedbackItem__cell').at(3).text()).toBe('mobile');

        // platform
        expect(wrapper.find('.FeedbackItem__cell').at(4).text()).toBe('MAcOS');
    });
});
