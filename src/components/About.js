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
                  <a href={`mailto:${'mail@mgr.se'}`}>mg@mgro.se</a>
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
              Long term success is achieved by focusing on the growth of oneself and those around
              them.
            </p>
            <p>
              Sustainably deliverying innovative software and value to users is achieved by the
              "evolving circle" of pairing together software craftsmanship, continuous delivery and
              lean product management.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
