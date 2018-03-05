import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import '../fonts/merriweather.css';
import '../fonts/linearicons/web-font/style.css';
import '../fonts/et-line-font/style.css';
import './bootstrap.min.css';
import 'animate.css/animate.min.css';
import './owl.carousel.min.css';
import './owl.theme.default.min.css';
import './jordan.less';
import './all.sass';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);

const TemplateWrapper = ({ children }) => (
  <div className="is-full-height">
    <Helmet title="Home | MG" />
    {(() => {
      if (process.env.NAV) {
        return <Navbar />;
      }
    })()}
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
