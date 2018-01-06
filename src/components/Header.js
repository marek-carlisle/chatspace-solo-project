import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <div className="instructions">
    <div className="container">
      <h1 className="lead">{ title }</h1>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
