import { Section, Title, Buttons, Button } from './FeedbackOptionsStyled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Buttons>
        {options.map(option => (
          <Button
            type="button"
            name={option}
            key={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        ))}
      </Buttons>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
};
