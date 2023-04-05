import { Information } from './NotificatioStyled';
import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Information>{message}</Information>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
