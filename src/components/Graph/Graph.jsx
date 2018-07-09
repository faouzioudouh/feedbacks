import React from 'react';
import DataMaps from "datamaps"
import { getMapData, popupTemplate } from './helpers';

import "./Graph.scss";

/**
 * @desc Graph component to render the multiline graph with d3!
 * @param {React.Props<Object>} Props 
 * @returns {React.Component}
 */

class GraphContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleRef = this.handleRef.bind(this);
    }

    componentDidMount () {
        this.map = new DataMaps({
            element: this.svgElement,
            fills: {
                'GOOD': '#3c763d',
                'OKAY': '#31708f',
                'BAD': '#fcf8e3',
                'TOO_BAD': '#a94442'
            },
        });

        this.drawBubbles(this.map);
    }

    componentDidUpdate() {
        this.drawBubbles(this.map);
    }

    drawBubbles(map) {
        const data = getMapData(this.props.feedbacks);
        map.bubbles(data, { popupTemplate });
    }

    handleRef(svgElement) {
        this.svgElement = svgElement;
    }

    render() {
        return (<div className="Graph">
            <div className="Graph__wrapper" ref={this.handleRef}></div>
            <p className="Graph__title">Feedbacks by countries with ratings average</p>
        </div>);
    }
}

export default GraphContainer;