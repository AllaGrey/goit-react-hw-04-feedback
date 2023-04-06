import { Feedback } from './AppStyled';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return (good / countTotal()) * 100;
  };
  const state = { good, neutral, bad };

  return (
    <Feedback>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
        title={'Please leave feedback'}
      />
      <Statistics
        message={'There is no feedback'}
        state={state}
        title={'Statistics'}
        total={countTotal()}
        positivePercentage={Math.ceil(positivePercentage())}
      />
    </Feedback>
  );
}
