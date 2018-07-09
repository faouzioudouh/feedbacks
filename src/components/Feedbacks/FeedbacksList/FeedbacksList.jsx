import React, { Fragment } from 'react';
import Types from '../../../Types';
import FeedbackItem from '../FeedbackItem';
import CircleBadge from '../../CircleBadge';
import { isMobile } from '../../../helpers';

/**
 * @desc renderBrowser renders browser and the virsion in a new line!
 * @param {String} browser
 * @param {String} version
 * @returns {React.Component}
 */
const renderBrowser = (browser, version) => {
    return <Fragment>{browser}<br />{version}</Fragment>
};

/**
 * @desc FeedbacksList renders list of FeedbackItem!
 * @param {React.Props} Props
 * @returns {React.Component}
 */
const FeedbacksList = ({ feedbacks }) => (
    <div className="FeedbacksList">
        {feedbacks.map(({ id, highlightedComment, comment, rating, computed_browser, browser }) =>
            <FeedbackItem
                key={id}
                comment={highlightedComment || comment}
                rating={<CircleBadge children={rating} />}
                browser={renderBrowser(computed_browser.Browser, computed_browser.Version)}
                platform={computed_browser.Platform}
                device={isMobile(browser.userAgent) ? 'Mobile' : 'Desktop'}
            />)}
    </div>
);

FeedbacksList.propTypes = {
  feedbacks: Types.arrayOf(Types.Feedback),
};

export default FeedbacksList;