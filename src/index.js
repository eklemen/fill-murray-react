import React, { Component } from 'react';
import PropTypes from 'prop-types';
const FillMurray = (props) => {
  const { w=300, h=300, grayscale } = props;
  const gray = grayscale ? '/g/' : '/';
  const source = `http://www.fillmurray.com${gray}${w}/${h}`;
  return (<img src={source} {...props}  />);
}
FillMurray.PropTypes = {
  w: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ]),
  h: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ]),
  g: PropTypes.bool
};
export default FillMurray;