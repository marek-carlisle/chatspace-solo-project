import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => (
  <div className="nav">
    <h2 className="navTitle">Prime Solo Project</h2>
    <div className="nav-right">
      <Link to="/home">
        Home
      </Link>
      {props.user.id && (
        <>
          <Link to="/info">
            Info Page
          </Link>
        </>
      )}
      <Link to="/about">
        About
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
