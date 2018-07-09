import React from 'react';
import Usabilla from './Usabilla';
import UsabillaApi from '../../UsabillaApi';
import ErrorHandler from '../ErrorHandler';

class UsabillaContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            feedbacks: null,
            error: null,
            isLoading: true,
        };
    }

    componentDidMount() {
        UsabillaApi.getFeedbacks()
            .then(resp => this.setState({ feedbacks: resp.data.items, isLoading: false }))
            .catch(error => this.setState({ error: error.message, isLoading: false }))
    }

    render() {
        const { isLoading, error, feedbacks } = this.state;

        return (
            <ErrorHandler
                isLoading={isLoading}
                error={error}
                data={feedbacks}
                delay={500}
                render={
                    feedbackItems => <Usabilla feedbacks={feedbackItems} />
                }
            />
        );
    }
}

export default UsabillaContainer;
