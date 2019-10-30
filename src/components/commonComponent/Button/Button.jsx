import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  action,
  text,
}) => (
  <button type="button" className={styles.button} onClick={action}>
    {text}
  </button>
);

Button.propTypes = {
  text: propTypes.string.isRequired,
  action: propTypes.func.isRequired,
};

export default Button;
