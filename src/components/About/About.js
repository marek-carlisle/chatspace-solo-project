import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <div>
      <p>
        This about page is for anyone to read!
      </p>
    </div>
    <Link to="/about">About</Link>
  </div>
);

// this allows us to use <App /> in index.js
export default AboutPage;
