import React from 'react';
import { mount, shallow } from 'enzyme';
import ErrorHandler from '../../../src/components/ErrorHandler';
import Spinner from '../../../src/components/Spinner';
import ErrorMessage from '../../../src/components/ErrorMessage';

describe('component/ErrorHandler', () => {
    const renderFunction = () => {};
    it('should render nothing if no props', () => {
        const wrapper =  mount(<ErrorHandler render={renderFunction} />);
        expect(wrapper.isEmptyRender()).toBe(true)
    });

    it('should render the Spinner', () => {
        const wrapper = mount(<ErrorHandler isLoading={true} error="error" render={renderFunction} />);
        expect(wrapper.find(Spinner).exists()).toBe(true);
    });

    it('should render the ErrorMessage', () => {
        const wrapper = mount(<ErrorHandler error={'Network error'} render={renderFunction} />);
        expect(wrapper.find(ErrorMessage).exists()).toBe(true);
        expect(wrapper.find(ErrorMessage).prop('message')).toBe('Network error');
    });

    it('should call (props.render) with the (props.data) as argument if no is loading and no error', () => {
        const renderFn = jest.fn();

        shallow(<ErrorHandler data={'data'} isLoading={false} error={null} render={renderFn} />);
        expect(renderFn).toBeCalledWith('data');
    });

    it('should render the Spinner after the delay', (done) => {
        const wrapper = shallow(<ErrorHandler isLoading={true} delay={50} render={renderFunction} />);
        expect(wrapper.find(Spinner).exists()).toBe(false);

        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find(Spinner).exists()).toBe(true);
            done();
        }, 50);
    });
});
