import React, { Component } from 'react';
import TypistCycle from './TypistCycle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Scroll from 'react-scroll';

export default class Hero extends Component {
  scroll = () => {
    Scroll.animateScroll.scrollTo(window.innerHeight, {
      smooth: true
    });
  };
  render() {
    return (
      <section id="hero" className="section-hero">
        <div className="hero-slides">
          <div
            className="slide"
            style={{ backgroundImage: `url(${'/img/background-workstation-crop.jpg'})` }}
          />
        </div>
        <svg
          className="hero-triangles"
          viewBox="0 0 263.07 394.61"
          preserveAspectRatio="xMinYMax meet"
        >
          <polygon
            className="primary-triangle"
            points="0 394.61 0 0 263.07 263.07 131.53 394.61 0 394.61"
          />
          <polygon className="gray-triangle" points="0 394.61 0 263.07 131.53 394.61 0 394.61" />
          <polygon
            className="gray-triangle"
            points="131.53 394.61 197.3 328.84 263.07 394.61 131.53 394.61"
          />
        </svg>
        <h1>Matthew Grose</h1>
        <TypistCycle
          content={['Full Stack Developer', 'DevOps', 'Site Reliability']}
          numberOfCycles={-1} // loop indefinitely
          segmentDelay={1} // stop for 0.8s at end line
          className="titles"
        />
        <div className="btm">
          <div className="left">
            {(() => {
              if (process.env.DOWN_ARROWS) {
                return (
                  <div className="scroll-down-indicator" onClick={this.scroll}>
                    <div className="down-arrow play" />
                    <div className="down-arrow play" />
                    <div className="down-arrow play" />
                  </div>
                );
              }
            })()}
          </div>
          <div className="right">
            <ul className="connect">
              <li>
                <a href="https://www.linkedin.com/in/matthew-grose-98753b26/">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={{ color: 'white' }} />
                </a>
              </li>
              <li>
                <a href="https://github.com/tiny-dancer/">
                  <FontAwesomeIcon icon={['fab', 'github']} style={{ color: 'white' }} />
                </a>
              </li>
            </ul>
            <a
              href="https://docs.google.com/document/d/1ysxsP3QAFIpL3pCNuAvnC5-7On-wSnZpQJWWkfzzKgg/export?format=pdf"
              target="_blank"
              className="btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}
