import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: '',
};

const Header = ({ title }) => (
  <div className="instructions">
    <div className="container">
      <h1 className="lead">{ title }</h1>
    </div>
  </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
