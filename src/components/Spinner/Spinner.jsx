import React from 'react';
import Icon from '../Icon';
import "./Spinner.scss";

/**
 * @desc Spinner renders a loading indicator!
 * @param {React.Props<{}>} Props Expecting no props 
 * @returns {React.Component}
 */
const Spinner =  () => {
    return (
      <div className="Spinner">
        <Icon name="loading" className="Spinner__icon" />
      </div>
    );
};

export default Spinner;