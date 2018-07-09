import React from 'react';
import Types from '../../Types';

import "./Pagination.scss";

/**
 * @desc Pagination component render Next/Previous navigation and current page!
 * @param {React.Props} Props
 * @returns {React.Component}
 */
const Pagination = ({
    pagesCount,
    currentPage,
    onPrevClick,
    onNextClick,
}) => {
    if (pagesCount < 2) {
        return null;
    }

    return (
        <div className="Pagination">
            <button className="Pagination__button" onClick={onPrevClick} disabled={currentPage === 1}>
                <span aria-hidden="true">Previous</span>
                <span className="VisuallyHidden">Click to navigate to previous page.</span>
            </button>
            <div className="Pagination__details">
                <span className="Pagination__current-page">
                    {currentPage}
                </span>
                /
                <span className="Pagination__pages-count">
                    {pagesCount}
                </span>
            </div>
            <button className="Pagination__button" onClick={onNextClick} disabled={currentPage === pagesCount}>
                <span aria-hidden="true">Next</span>
                <span className="VisuallyHidden">Click to navigate to next page.</span>
            </button>
        </div>
    );
};

Pagination.propTypes = {
  pagesCount: Types.number,
  currentPage: Types.number,
  onNextClick: Types.func,
  onPrevClick: Types.func,
};

export default Pagination;