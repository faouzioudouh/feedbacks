import React from 'react';
import classnames from 'classnames';
import Types from '../../Types';
import "./Icon.scss";

/**
 * @desc Icon renders a loading indicator (gif)!
 * @param {React.Props<{}>} Props Expecting no props 
 * @returns {React.Component}
 */
const Icon =  ({
    name,
    className,
}) => {
    return (
      <div className={classnames('Icon',className)}>
        <img className="Icon__image" src={require(`../../assets/icons/${name}.svg`)} alt={name} />
      </div>
    );
};

Icon.propTypes = {
    name: Types.string,
    className: Types.string,
};
  
export default Icon;