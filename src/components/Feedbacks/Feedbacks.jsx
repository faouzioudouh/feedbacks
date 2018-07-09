import React from 'react';
import Types from '../../Types';
import FeedbackItem from './FeedbackItem';
import FeedbacksList from './FeedbacksList';
import Pagination from '../Pagination';

import "./Feedbacks.scss";

/**
 * @desc Feedbacks renders list of FeedbackItem with header!
 * @param {React.Props} Props
 * @returns {React.Component}
 */
const Feedbacks = ({
    feedbacks,
}) => (
    <div className="Feedbacks">
        <FeedbackItem
            className="FeedbackItem__Header"
            rating="Rating"
            comment="Comment"
            browser="Browser"
            browserVersion="Version"
            device="Device"
            platform="platform"
        />
        { 
            feedbacks.length ?
                <Pagination data={feedbacks} render={
                    paginatedData => <FeedbacksList feedbacks={paginatedData} />
                }/> :
                <div className="Feedbacks__no-feedback" aria-live="assertive">
                    Sorry, no feedback match your filter criteria.
                </div>
        }
    </div>
);

Feedbacks.propTypes = {
  feedbacks: Types.arrayOf(Types.Feedback).isRequired,
};

export default Feedbacks;