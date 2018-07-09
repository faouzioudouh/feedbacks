import React from 'react';
import classnames from 'classnames';
import Types from '../../../Types';

import "./FeedbackItem.scss";

/**
 * @desc FeedbackItem renders task item {title, isDone)!
 * @param {React.Props} Props
 * @returns {React.Component}
 */
const FeedbackItem = ({
    className,
    comment,
    rating,
    browser,
    platform,
    device,
}) => (
    <div className={classnames('FeedbackItem', className)}>
        <div className="FeedbackItem__wrapper">
            <div className="FeedbackItem__cell">
                {rating}
            </div>
            <div
                className="FeedbackItem__cell FeedbackItem__cell--comment"
                dangerouslySetInnerHTML={{ __html: comment }} />

            <div className="FeedbackItem__cell">
                {browser}
            </div>
            <div className="FeedbackItem__cell">
                {device}
            </div>
            <div className="FeedbackItem__cell">
                {platform}
            </div>
        </div>
    </div>
);

FeedbackItem.propTypes = {
    rating: Types.oneOfType([Types.object, Types.string]),
    className: Types.string,
    comment: Types.string,
    browser: Types.oneOfType([Types.object, Types.string]),
    platform: Types.string,
    device: Types.string,
};

export default FeedbackItem;