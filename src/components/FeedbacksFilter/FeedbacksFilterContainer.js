import React, { Fragment } from 'react';
import FeedbacksFilter from './FeedbacksFilter';
import Types from '../../Types';
import { toggleItemInArray } from '../../helpers';
import { filterFeedbacks } from './helpers';

class FeedbacksFilterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onRatingClick = this.onRatingClick.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);

        this.state = {
            search: "",
            activeRatings: [],
            filteredFeedbacks: this.props.feedbacks,
        };
    }

    /**
     * @desc Get search input props.
     * @returns {Object} props.
     */
    getSearchInputProps() {
        return {
          value: this.state.search,
          placeholder: 'Search here!',
          type: 'search',
          onChange: this.onSearchChange,
        };
    }

    /**
     * @desc Get input props.
     * @param {string} name: Input name.
     * @returns {Object}
     */
    getRatingsFilterProps() {
        return {
            ratings: this.props.ratings,
            activeRatings: this.state.activeRatings,
            onClick: this.onRatingClick,
        };
    }

    /**
     * @desc on Rating Click callback, update state and filter feedbacks.
     * @param {Number} rating 
     */
    onRatingClick(rating) {
        const activeRatings = toggleItemInArray(this.state.activeRatings)(rating);
        this.setState({
            activeRatings,
            filteredFeedbacks: filterFeedbacks(this.props.feedbacks)(this.state.search, activeRatings),
        });
    }

    /**
     * @desc on search change callback, update state and filter feedbacks.
     * @param {Event} event 
     */
    onSearchChange(event) {
        const searchKeyword = event.target.value;
        this.setState({
            search: searchKeyword,
            filteredFeedbacks: filterFeedbacks(this.props.feedbacks)(searchKeyword, this.state.activeRatings),
        })
    }

    render() {
        return (
            <Fragment>
                <FeedbacksFilter
                    searchInputProps={this.getSearchInputProps()}
                    ratingsFilterProps={this.getRatingsFilterProps()}
                />
                {this.props.render(this.state.filteredFeedbacks)}
            </Fragment>
        );
    }
}

FeedbacksFilterContainer.propTypes = {
    render: Types.func.isRequired,
    ratings: Types.arrayOf(Types.number),
    feedbacks: Types.arrayOf(Types.Feedback),
};

FeedbacksFilterContainer.defaultProps = {
    ratings: [1, 2, 3, 4, 5],
};

export default FeedbacksFilterContainer;
