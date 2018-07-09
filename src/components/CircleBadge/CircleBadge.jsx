import React from 'react';
import classnames from 'classnames';
import Types from '../../Types';

import "./CircleBadge.scss";

/**
 * @desc CircleBadge renders a a circle shape with text!
 * @param {React.Props} Props
 * @returns {React.Component}
 */
const CircleBadge = ({
    className,
    children,
}) => (
    <div className={classnames('CircleBadge', className)}>
        {children}
    </div>
);

CircleBadge.propTypes = {
    children: Types.Children,
    className: Types.string,
};

export default CircleBadge;