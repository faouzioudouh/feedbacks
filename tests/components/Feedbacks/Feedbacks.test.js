import React from 'react';
import { shallow } from 'enzyme';
import Feedbacks from '../../../src/components/Feedbacks/Feedbacks';
import FeedbackItem from '../../../src/components/Feedbacks/FeedbackItem';
import Pagination from '../../../src/components/Pagination';

describe('component/Feedbacks', () => {
    it('should render the table header', () => {
        const wrapper = shallow(<Feedbacks  feedbacks={[1, 2]} />);
        expect(wrapper.find(FeedbackItem).exists()).toBe(true);
        expect(wrapper.find(FeedbackItem).props()).toEqual({
            browser: "Browser",
            browserVersion: "Version",
            className: "FeedbackItem__Header",
            comment: "Comment",
            device: "Device",
            platform: "platform",
            rating: "Rating"
        });
    });

    it('should render the paginations', () => {
        const wrapper = shallow(<Feedbacks  feedbacks={new Array(100)} />);
        expect(wrapper.find(Pagination).exists()).toBe(true);
        expect(wrapper.find(Pagination).prop('data')).toEqual(new Array(100));
    });

    it('should render the no-feedback match message', () => {
        const wrapper = shallow(<Feedbacks  feedbacks={[]} />);
        expect(wrapper.find('.Feedbacks__no-feedback').exists()).toBe(true);
        expect(wrapper.find('.Feedbacks__no-feedback').text()).toBe('Sorry, no feedback match your filter criteria.');
    });

    it('should not render the no-feedbacks message there is feedbacks', () => {
        const wrapper = shallow(<Feedbacks feedbacks={[1]} />);
        expect(wrapper.find('.Feedbacks__no-feedback').exists()).toBe(false);
    });
});
