import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  render() {
    return (
      <section id="about-me" class="section-about-me flex-responsive">
        <svg class="triangle" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMin meet">
          <path d="M0 0 L100 0 L100 100 Z" />
        </svg>
        <div class="profile-pic">
          <div
            class="photo-container"
            style={{ backgroundImage: `url(${'/img/talking-on-stage-github-crop.jpg'}` }}
          />
        </div>
        <div class="details">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <ul class="animation-chain">
              <li>
                <span class="field-title">Name</span>
                <span class="field-content">Matthew Grose</span>
              </li>
              <li>
                <span class="field-title">Email</span>
                <span class="field-content">
                  <a href={`mailto:${'mg@mgro.se'}`}>mg@mgro.se</a>
                </span>
              </li>
              <li>
                <span class="field-title">Location</span>
                <span class="field-content">Minneapolis, MN USA</span>
              </li>
            </ul>
          </ScrollAnimation>
          <div class="intro">
            <p>
              Effective leaders ensure the balance of investing in invidual and team growth to
              acheving desirable results. Stephen Covey's definition of effectiveness, "the balance
              of obtaining desirable results with caring for that which produces those results".
            </p>
            <p>
              Effective engineers practice the "evolving circle" of pairing together software
              craftsmanship, continuous delivery and lean product management to sustainably deliver
              innovative software and value to users.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
