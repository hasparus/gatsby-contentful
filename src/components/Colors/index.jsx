import React from 'react';
import PropTypes from 'prop-types';

export const Colors = {
  Grape: '#592c5f',
};

const propTypes = {
  size: PropTypes.number,
};

export const ColorBlob = ({ size }) => (
  <div
    style={{
      background: Colors.Grape,
      width: size,
      height: size,
      borderRadius: '50%',
    }}
  />
);

ColorBlob.propTypes = propTypes;
ColorBlob.defaultProps = {
  size: 100,
};
