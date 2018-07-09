import React from 'react';
import Types from '../../Types';
import TextField from '../TextField';
import RatingsFilter from './RatingsFilter/RatingsFilter';

import "./FeedbacksFilter.scss";

/**
 * @description FeedbacksFilter stateless component to create/edit a task!
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */
const FeedbacksFilter = ({
  searchInputProps,
  ratingsFilterProps,
}) => {
  return (<div className="FeedbacksFilter">
    <div className="FeedbacksFilter__search">
      <TextField {...searchInputProps} />
    </div>
    <div className="FeedbacksFilter__rating">
      <RatingsFilter {...ratingsFilterProps} />
    </div>
  </div>);
};

FeedbacksFilter.propTypes = {
  searchInputProps: Types.shape({
    type: Types.string,
    placeholder: Types.string,
    onChange: Types.func,
  }),
  ratingsFilterProps: Types.shape({
    availableRatings: Types.arrayOf(Types.number),
    ratings: Types.arrayOf(Types.number),
    onClick: Types.func,
  }),
};

export default FeedbacksFilter;