/**
 * @desc feedbacks By Country
 */
export const feedbacksByCountry = feedbacks => county => {
    return feedbacks.reduce((acc, current) => {
        return current.geo.country === county ? acc + 1 : acc;
    }, 0);
}

/**
 * @desc average Rating By Country
 */
export const averageRatingByCountry = feedbacks => (county, feedbacksCount) => {
    const total = feedbacks.reduce((acc, current) => {
        return current.geo.country === county ? acc + current.rating : acc;
    }, 0);

    return (total / feedbacksCount).toFixed(2)
}

/**
 * @desc get Map Data
 */
export const getMapData = feedbacks => {
    const getFeedbacksByCountry = feedbacksByCountry(feedbacks);
    const getAverageRatingByCountry = averageRatingByCountry(feedbacks);

    return feedbacks
        .map(feedback => {
            const feedbacksCount = getFeedbacksByCountry(feedback.geo.country);
            const ratingsAverage = getAverageRatingByCountry(feedback.geo.country, feedbacksCount);

            return {
                latitude: feedback.geo.lat,
                longitude: feedback.geo.lon,
                postalcode: feedback.geo.postalcode,
                city: feedback.geo.city,
                country: feedback.geo.country,
                radius: feedbacksCount * 2,
                feedbacks: feedbacksCount,
                avergaeRatinsgPerCountry: ratingsAverage,
                fillKey: getColorByAverage(ratingsAverage),
            }
        })
        // Unique countries
        .reduce((acc, current) => {
            return acc.some(item => item.country === current.country) ? acc : [...acc, current];
        }, []) ;
}


/**
 * @desc popup Template
 */
export const popupTemplate = (geo, data) => (`
    <div class="hoverinfo">
        Country: ${data.country}<br/>
        Feedbacks: ${data.feedbacks}<br/>
        Average rating: ${data.avergaeRatinsgPerCountry}<br/>
    </div>`
);

/**
 * @desc popup Template
 */
export const getColorByAverage = ratingsAverage => {
    let bubbleColor = 'GOOD';

    if (ratingsAverage < 4) {
        bubbleColor = 'GOOD'
    } else if (ratingsAverage < 3) {
        bubbleColor = 'BAD'
    } else if (ratingsAverage < 2) {
        bubbleColor = 'TOO_BAD'
    } else if (ratingsAverage < 1) {
        bubbleColor = 'TOO_BAD'
    }

    return bubbleColor;
};

