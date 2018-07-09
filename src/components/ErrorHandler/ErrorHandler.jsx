import React from 'react';
import Types from '../../Types';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

class ErrorHandler extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showSpinner: this.props.delay < 1,
        };

        !this.state.showSpinner && this.showSpinnerAfterTimeout.call(this);
    }

    showSpinnerAfterTimeout() {
        setTimeout(() => {
            this.setState({ showSpinner: true });
        }, this.props.delay)
    }

    render() {
        const { isLoading, error, data, render } = this.props;

        if (isLoading && this.state.showSpinner) {
            return <Spinner />
        } else if (error) {
            return <ErrorMessage message={error} />
        } else if (data) {
            return render(data);
        } else {
            return null;
        }
    }
}


ErrorHandler.propTypes = {
  isLoading: Types.bool,
  error: Types.string,
  data: Types.any,
  render: Types.func.isRequired,
  delay: Types.number,
};

ErrorHandler.defaultProps = {
    delay: 0,
};

export default ErrorHandler;