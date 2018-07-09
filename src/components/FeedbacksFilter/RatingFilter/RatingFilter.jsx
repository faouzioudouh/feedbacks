import React from 'react';
import classnames from 'classnames';
import Types from '../../../Types';
import CircleBadge from '../../CircleBadge';

import "./RatingFilter.scss";

/**
 * @description RatingFilter stateless component to render the rating
 * label and checkbox to filter the feedbacks based on ratings values!
 * @param {React.Props<Object>} Props
 * @returns {React.Component}
 */
const RatingFilter = ({
  rating,
  isActive,
  onClick,
}) => (
  <div className="RatingFilter">
    <CircleBadge
        key={rating}
        className={classnames({'CircleBadge--inactive': !isActive})}>
        <label className="RatingFilter__label">
          <input className="VisuallyHidden" type="checkbox" checked={isActive} onClick={onClick} />
          <span aria-hidden="true">{rating}</span>
          <span className="VisuallyHidden">Filter feedbacks by rating {rating}</span>
        </label>
    </CircleBadge>
  </div>
);

RatingFilter.propTypes = {
  rating: Types.number,
  isActive: Types.bool,
  onClick: Types.func,
};

export default RatingFilter;