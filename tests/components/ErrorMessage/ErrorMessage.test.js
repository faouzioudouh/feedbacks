import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../../../src/components/ErrorMessage';
import Icon from '../../../src/components/Icon';

describe('component/ErrorMessage', () => {
    it('should render nothing if no message is given', () => {
        const wrapper = shallow(<ErrorMessage  />);
        expect(wrapper.isEmptyRender()).toBe(true)
    });

    it('should render the error message and the icon', () => {
        const wrapper = shallow(<ErrorMessage message="Be happy" />);
        expect(wrapper.find('.ErrorMessage__message').exists()).toBe(true);
        expect(wrapper.find('.ErrorMessage__message').text()).toBe('Be happy');
        expect(wrapper.find(Icon).prop('name')).toBe('network_error');
        expect(wrapper.find(Icon).hasClass('ErrorMessage__icon')).toBe(true);
    });

    it('should render the message with a11y attributes', () => {
        const wrapper = shallow(<ErrorMessage message="Be happy" />);
        expect(wrapper.find('.ErrorMessage__message').prop('tabIndex')).toBe('0');
        expect(wrapper.find('.ErrorMessage__message').prop('aria-live')).toBe('assertive');
    });
});
