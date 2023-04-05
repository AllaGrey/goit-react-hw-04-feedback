import { Feedback } from './AppStyled';
import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = Object.freeze({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  onLeaveFeedback = event => {
    const targetBtn = event.target.name;
    this.setState(prevState => {
      return {
        [targetBtn]: prevState[targetBtn] + 1,
      };
    });
    return targetBtn;
  };

  countTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercentage() {
    return (this.state.good / this.countTotal()) * 100;
  }

  render() {
    const options = Object.keys(this.state);
    return (
      <Feedback>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
          title={'Please leave feedback'}
        />
        <Statistics
          message={'There is no feedback'}
          state={this.state}
          title={'Statistics'}
          total={this.countTotal()}
          positivePercentage={Math.ceil(this.positivePercentage())}
        />
      </Feedback>
    );
  }
}
