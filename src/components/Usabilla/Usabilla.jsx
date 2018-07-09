import React from 'react';
import Types from '../../Types';
import Feedbacks from '../Feedbacks';
import FeedbacksFilter from '../FeedbacksFilter';
import Icon from '../Icon';

import "./Usabilla.scss";

/**
 * @desc Usabilla component is the root component!
 * @param {React.Props<Object>} Props
 * @returns {React.Component}
 */
const Usabilla = ({
    feedbacks,
}) => {
  return (<div className="Usabilla">
    <header className="Usabilla__header">
      <Icon name="dashboard" />
      <h1 className="Usabilla__title">Dashboard</h1>
    </header>
    <div className="Usabilla__dashboard">
      <FeedbacksFilter
          feedbacks={feedbacks}
          render={
            filteredFeedbacks =>
              <Feedbacks feedbacks={filteredFeedbacks} />
          }
        />
    </div>
  </div>);
};

Usabilla.propTypes = {
  feedbacks: Types.arrayOf(Types.Feedback),
};

export default Usabilla;