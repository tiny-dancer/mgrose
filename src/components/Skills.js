import React, { Component } from 'react';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Skills extends Component {
  render() {
    return (
      <section id="skills-knowledge" className="section-skills-knowledge bgLightGray">
        <div className="triangle" />
        <Element name="skills" />
        <h2>Skills &amp; Knowledge</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain">
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <span className="lnr lnr-layers" />
              </ScrollAnimation>
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>Back-End Development</h3>
            <ul>
              <li>
                Java & Groovy (Spring)<span className="highlight">Advanced</span>
              </li>
              <li>
                SOLID Principles<span className="highlight">Advanced</span>
              </li>
              <li>.NET C#</li>
              <li>NodeJS</li>
              <li>MySQL & MSSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain">
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <span className="lnr lnr-laptop-phone" />
              </ScrollAnimation>
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>Front-End Development</h3>
            <ul>
              <li>
                React<span className="highlight">Advanced</span>
              </li>
              <li>Angular</li>
              <li>Javascript (ES.Next)</li>
              <li>Typescript</li>
              <li>Atomic Design</li>
              <li>React-Native</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain">
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <span className="lnr lnr-cloud-check" />
              </ScrollAnimation>
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>DevOps / Site Reliability</h3>
            <ul>
              <li>
                Lean Agile Development<span className="highlight">Advanced</span>
              </li>
              <li>
                Jenkins 2, Pipeline as Code<span className="highlight">Advanced</span>
              </li>
              <li>Kubernetes</li>
              <li>AWS</li>
              <li>Prometheus / Grafana</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-icon animation-chain">
              <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <span className="lnr lnr-users" />
              </ScrollAnimation>
              {/* Below: example of using image instead of icon font */}
              {/* <img src="path/to/image.svg" alt=""> */}
            </div>
            <h3>Standards</h3>
            <ul>
              <li>
                OpenID Connect<span className="highlight">Advanced</span>
              </li>
              <li>OAuth2</li>
              <li>SAML 2.0</li>
              <li>RBAC & ABAC</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
