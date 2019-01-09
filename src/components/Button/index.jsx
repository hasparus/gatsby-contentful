import React from 'react';
import PropTypes from 'prop-types';

import Colors from '../Colors';

import styles from './styles.module.scss';

const propTypes = {
  onClick: PropTypes.func,
};

const Button = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      backgroundColor: Colors.StrongPink,
    }}
    className={styles.button}
  >
    See project
  </button>
);

Button.propTypes = propTypes;

export default Button;
