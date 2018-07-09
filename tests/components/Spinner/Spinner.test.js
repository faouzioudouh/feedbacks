import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../src/components/Spinner';
import Icon from '../../../src/components/Icon';

describe('component/Spinner', () => {
    it('should render the spinner gif', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.find(Icon).prop('name')).toBe('loading');
    });
});
