import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default class Skills extends Component {
  render() {
    return (
      <section id="skills-knowledge" className="section-skills-knowledge bgLightGray">
        <div className="triangle" />
        <Element name="skills" />
        <h2>Skills &amp; Knowledge</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain" data-animation="zoomIn">
              <span className="lnr lnr-layers" />
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>Visual Design</h3>
            <ul>
              <li>
                Typography<span className="highlight">Advanced</span>
              </li>
              <li>Layout Design</li>
              <li>Color Theory</li>
              <li>
                Adobe Photoshop<span className="highlight">Advanced</span>
              </li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain" data-animation="zoomIn">
              <span className="lnr lnr-laptop-phone" />
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>Front-End Development</h3>
            <ul>
              <li>HTML5</li>
              <li>
                CSS3<span className="highlight">Advanced</span>
              </li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain" data-animation="zoomIn">
              <span className="lnr lnr-keyboard" />
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>WordPress Development</h3>
            <ul>
              <li />
              <li>PHP</li>
              <li>SQL</li>
              <li>
                WordPress API<span className="highlight">Advanced</span>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain" data-animation="zoomIn">
              <span className="lnr lnr-users" />
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>User Research</h3>
            <ul>
              <li>Survey</li>
              <li>Interview</li>
              <li>Speed Dating</li>
              <li>Think Alouds</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
