import React from 'react';
import Icon from '../Icon';
import Types from '../../Types';

import "./ErrorMessage.scss";

/**
 * @description ErrorMessage Component renders error message!
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */
const ErrorMessage =  ({
    message
}) => {
    if (!message) {
        return null;
    }

    return (
      // tabIndex="0" and aria-live="assertive" are a11y attributes to allow to set the focus
      // on the error message so the user is notified that something went wrong!
      <div className="ErrorMessage">
        <Icon name="network_error" className="ErrorMessage__icon" />
        <span className="ErrorMessage__message" aria-live="assertive" tabIndex="0">{message}</span>
      </div>
    );
};

ErrorMessage.propTypes = {
    message: Types.string.isRequired,
};

export default ErrorMessage;