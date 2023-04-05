import { Section, Title, List, Item } from './StatisticsStyled';
import propTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  state: { good, neutral, bad },
  total,
  positivePercentage,
  title,
  message,
}) => {
  return (
    <Section>
      <Title>{title}</Title>
      {total > 0 ? (
        <List>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </List>
      ) : (
        <Notification message={message} />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  state: propTypes.shape({
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
  }).isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
};
