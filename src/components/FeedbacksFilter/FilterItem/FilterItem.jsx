import React from 'react';
import classnames from 'classnames';
import Types from '../../../Types';
import CircleBadge from '../../CircleBadge';

import "./FilterItem.scss";

/**
 * @desc FilterItem stateless component to render the rating
 * label and checkbox to filter the feedbacks based on ratings values!
 * @param {React.Props<Object>} Props
 * @returns {React.Component}
 */
const FilterItem = ({
  item,
  isActive,
  onClick,
  a11yLabel,
}) => (
  <div className="FilterItem">
    <CircleBadge
        key={item}
        className={classnames({'CircleBadge--inactive': !isActive})}>
        <label className="FilterItem__label">
          <input className="VisuallyHidden" type="checkbox" checked={isActive} onClick={onClick} />
          <span aria-hidden="true">{item}</span>
          <span className="VisuallyHidden">Filter feedbacks by {a11yLabel} {item}</span>
        </label>
    </CircleBadge>
  </div>
);

FilterItem.propTypes = {
  rating: Types.number,
  isActive: Types.bool,
  onClick: Types.func,
};

export default FilterItem;