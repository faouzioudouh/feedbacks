import React from 'react';
import Types from '../../../Types';
import FilterItem from '../FilterItem';

import "./FilterItems.scss";

const renderRatingsBadges = ({
  activeItems,
  items,
  itemConverter,
  onClick,
  a11yLabel,
}) => {
  return items.map(item => {
    const isActive = activeItems.includes(item);
    const filterValue = typeof itemConverter === 'function' ? itemConverter(item) : item;

    return (
      <FilterItem
        key={item}
        item={filterValue}
        isActive={isActive}
        a11yLabel={a11yLabel}
        onClick={onClick.bind(null, item)}
      />
    );
  });
};

/**
 * @desc FilterItems stateless component to render the ratings
 * buttons to filter the feedbacks based on ratings values!
 * @param {React.Props<Object>} Props
 * @returns {React.Component}
 */
const FilterItems = props => (
  <fieldset className="FilterItems">
    <legend className="VisuallyHidden">Filter feedbacks by ratings</legend>
    <div className="FilterItems__container">
      {renderRatingsBadges(props)}
    </div>
  </fieldset>
);

FilterItems.propTypes = {
  activeRatings: Types.arrayOf(Types.number),
  ratings: Types.arrayOf(Types.number),
  onClick: Types.func,
};

export default FilterItems;