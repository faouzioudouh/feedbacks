import React from 'react';
import Types from '../../../Types';
import RatingFilter from '../RatingFilter';

import "./RatingsFilter.scss";

const renderRatingsBadges = ({
  activeRatings,
  ratings,
  onClick,
}) => {
  return ratings.map(rating => {
    const isActive = activeRatings.includes(rating);

    return (
      <RatingFilter
        key={rating}
        rating={rating}
        isActive={isActive}
        onClick={onClick.bind(null, rating)}
      />
    );
  });
};

/**
 * @desc RatingsFilter stateless component to render the ratings
 * buttons to filter the feedbacks based on ratings values!
 * @param {React.Props<Object>} Props
 * @returns {React.Component}
 */
const RatingsFilter = props => (
  <fieldset className="RatingsFilter">
    <legend className="VisuallyHidden">Filter feedbacks by ratings</legend>
    <div className="RatingsFilter__container">
      {renderRatingsBadges(props)}
    </div>
  </fieldset>
);

RatingsFilter.propTypes = {
  activeRatings: Types.arrayOf(Types.number),
  ratings: Types.arrayOf(Types.number),
  onClick: Types.func,
};

export default RatingsFilter;