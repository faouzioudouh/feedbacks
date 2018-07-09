import { highlightKeyword } from '../../helpers';

/**
 * @desc Highlights the given keyword in the given feedback (comment).
 * @param {String} keyword
 * @returns {Function} Accept a feedback as parameter and returns the new feedback with new hightlightedComment.
 */
const highlightKeywordInComment = keyword => feedback => {
    return Object.assign({}, feedback, {
        highlightedComment: highlightKeyword(feedback.comment)(keyword),
    });
}

/**
 * @desc checks if the gievn feedback's comment contains the given keyword.
 * @param {String} keyword
 * @returns {Function} Accept a feedback as parameter and returns True if the comment contains the keyword
 * returns False otherwise.
 */
const isKeywordInComment = keyword => feedback =>
    feedback.comment.search(keyword) !== -1;

/**
 * @desc Filter the feedbacks.
 * @param {string} search: search keyword.
 * @param {Array} activeRatings: search ratings.
 * @returns {Array} filtered feedbacks
 */
export const filterFeedbacks = feedbacks => (search, activeRatings) => {
    let filteredFeedbacks = [...feedbacks];

    // If search filter
    if (search) {
        filteredFeedbacks = filteredFeedbacks
            .filter(isKeywordInComment(search))
            .map(highlightKeywordInComment(search));
    }

    // If ratings filter
    if (activeRatings.length) {
        filteredFeedbacks = filteredFeedbacks
            .filter(({ rating }) => activeRatings.includes(rating));
    }

    return filteredFeedbacks;
}