import React, { Fragment } from 'react';
import FeedbacksFilter from './FeedbacksFilter';
import Types from '../../Types';
import { toggleItemInArray } from '../../helpers';
import { filterFeedbacks } from './helpers';
import Icon from '../Icon';

class FeedbacksFilterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onFilterItemClick = this.onFilterItemClick.bind(this);

        this.state = {
            search: "",
            ratings: [],
            devices: [],
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
     * @desc Get Rating Filter props.
     * @returns {Object}
     */
    getFilterItemsProps() {
        return {
            items: this.props.ratings,
            activeItems: this.state.ratings,
            onClick: this.onFilterItemClick('ratings'),
            a11yLabel: 'Rating'
        };
    }

    /**
     * @desc Get Device filter props.
     * @returns {Object} {
     *  items: filter items,
     *  activeItems: active filter values,
     *  a11yLabel: Label used for accessibility purpose,
     *  a11yLabel 'Device',
     *  itemConverter: Function used to convert the filter values into something else rather than string (E.g. Icons).
     * }
     */
    getDevicesFilterProps() {
        return {
            items: this.props.devices,
            activeItems: this.state.devices,
            onClick: this.onFilterItemClick('devices'),
            a11yLabel: 'Device',
            itemConverter: item => <Icon name={item} />
        };
    }

    /**
     * @desc on Filter click => Filter the feedbacks.
     * @param {String|Number} filterName
     */
    onFilterItemClick(filterName) {
        return filterValue => {
            const { feedbacks } = this.props;
            const newFilterValues = toggleItemInArray(this.state[filterName])(filterValue);

            const filters = Object.assign({}, this.state, {
                [filterName]: newFilterValues,
            });

            this.setState({
                [filterName]: newFilterValues,
                filteredFeedbacks: filterFeedbacks(feedbacks)(filters),
            });
        }
    }

    /**
     * @desc on search change callback, update state and filter feedbacks.
     * @param {Event} event 
     */
    onSearchChange(event) {
        const searchKeyword = event.target.value;
        const filters = Object.assign({}, this.state, {
            search: searchKeyword,
        });

        this.setState({
            search: searchKeyword,
            filteredFeedbacks: filterFeedbacks(this.props.feedbacks)(filters),
        })
    }

    render() {
        return (
            <Fragment>
                <FeedbacksFilter
                    searchInputProps={this.getSearchInputProps()}
                    FilterItemsProps={this.getFilterItemsProps()}
                    devicesFilterProps={this.getDevicesFilterProps()}
                />
                {this.props.render(this.state.filteredFeedbacks)}
            </Fragment>
        );
    }
}

FeedbacksFilterContainer.propTypes = {
    render: Types.func.isRequired,
    ratings: Types.arrayOf(Types.number),
    devices: Types.arrayOf(Types.string),
    feedbacks: Types.arrayOf(Types.Feedback),
};

FeedbacksFilterContainer.defaultProps = {
    ratings: [1, 2, 3, 4, 5],
    devices: ['mobile', 'desktop'],
};

export default FeedbacksFilterContainer;
