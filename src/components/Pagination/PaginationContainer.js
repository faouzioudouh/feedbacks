import React, { Fragment } from 'react';
import Types from '../../Types';
import Pagination from './Pagination';

class PaginationContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onPrevClick = this.onPrevClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);

        const pagesCount = Math.ceil(props.data.length / props.pageSize);

        this.state = {
            pagesCount,
            currentPage: 1,
            pageChanged: false,
            data: this.props.data,
            paginatedData: this.props.data.slice(0, props.pageSize),
        };
    }

    onPrevClick() {
        const prevDataStart = (this.state.currentPage - 1) * this.state.pagesCount;
        const prevDataEnd = this.state.currentPage * this.state.pagesCount;

        this.setState({
            currentPage: this.state.currentPage - 1,
            pageChanged: true,
            paginatedData: this.state.data.slice(prevDataStart, prevDataEnd),
        });
    }

    onNextClick() {
        const nextDataStart = this.state.currentPage * this.state.pagesCount;
        const nextDataEnd = (this.state.currentPage + 1) * this.state.pagesCount;

        this.setState({
            currentPage: this.state.currentPage + 1,
            pageChanged: true,
            paginatedData: this.state.data.slice(nextDataStart, nextDataEnd),
        });
    }

    static getDerivedStateFromProps(props, state) {
        const currentPage = state.pageChanged ? state.currentPage: 1;
        const pagesCount = Math.ceil(props.data.length / props.pageSize);
        const nextDataStart = (currentPage - 1) * props.pageSize;
        const nextDataEnd = currentPage * props.pageSize;

        return {
            pagesCount,
            currentPage: currentPage,
            pageChanged: false,
            paginatedData: props.data.slice(nextDataStart, nextDataEnd),
        };
    }

    render() {
        const { paginatedData, currentPage, pagesCount } = this.state;

        return (
            <Fragment>
                <Pagination
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    onPrevClick={this.onPrevClick}
                    onNextClick={this.onNextClick}
                />
                {this.props.render(paginatedData)}
                <Pagination
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    onPrevClick={this.onPrevClick}
                    onNextClick={this.onNextClick}
                />
            </Fragment>
        );
    }
}

PaginationContainer.propTypes = {
    pageSize: Types.number,
};

PaginationContainer.defaultProps = {
    pageSize: 10,
};

export default PaginationContainer;
