import React from 'react';
import Types from '../../Types';
import TextField from '../TextField';
import FilterItems from './FilterItems';

import "./FeedbacksFilter.scss";

/**
 * @desc FeedbacksFilter stateless component to create/edit a task!
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */
const FeedbacksFilter = ({
  searchInputProps,
  FilterItemsProps,
  devicesFilterProps,
}) => {
  return (<div className="FeedbacksFilter">
    <div className="FeedbacksFilter__search">
      <TextField {...searchInputProps} />
    </div>
    <div className="FeedbacksFilter__rating">
      <FilterItems {...FilterItemsProps} />
    </div>
    <div className="FeedbacksFilter__device">
      <FilterItems {...devicesFilterProps} />
    </div>
  </div>);
};

FeedbacksFilter.propTypes = {
  searchInputProps: Types.shape({
    type: Types.string,
    placeholder: Types.string,
    onChange: Types.func,
  }),
  FilterItemsProps: Types.Filter,
  devicesFilterProps: Types.Filter,
};

export default FeedbacksFilter;