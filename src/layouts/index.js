import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import '../fonts/merriweather.css';
//import '../fonts/linearicons/web-font/style.css';
import '../fonts/et-line-font/style.css';
import 'linearicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './jordan.less';
import './all.sass';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);

const TemplateWrapper = ({ children }) => (
  <div className="is-full-height">
    <Helmet title="Home | MG" />
    <Navbar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
