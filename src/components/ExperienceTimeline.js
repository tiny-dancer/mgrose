import React, { Component } from 'react';
import suitcaseSvg from '../img/suitcase.svg';
import capSvg from '../img/cap.svg';
import ScrollAnimation from 'react-animate-on-scroll';

var TimelineItem = props => {
  var animateIn = 'fadeIn';
  animateIn += props.align === 'right' ? 'Left' : 'Right';

  return (
    <li>
      <div className="icon">
        <img src={props.icon} alt />
      </div>

      <div className="animation-chain overflow-hidden">
        <ScrollAnimation animateIn={animateIn} animateOnce={true}>
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
          <div className="date">{props.dateRange}</div>
        </ScrollAnimation>
      </div>

      <p>{props.children}</p>
    </li>
  );
};

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'UI / UX Designer',
          subtitle: 'Amazing Design',
          dateRange: 'Aug 2007 - Now',
          align: 'right',
          icon: suitcaseSvg
        }
      ]
    };
  }

  render() {
    return (
      <section id="experience-education" className="section-experience-education bgPrimaryColor">
        <h2>Experience &amp; Education</h2>
        <ul className="timeline">
          items
          <TimelineItem
            title="UI / UX Designer"
            subtitle="Amazing Design"
            dateRange="Aug 2007 - Now"
            align="right"
            icon={suitcaseSvg}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta exercitationem nam
            perferendis tempora eius repellat expedita numquam, beatae eaque nihil? Aliquam
            architecto voluptatum provident animi, excepturi fugit ut! Impedit, eum!
          </TimelineItem>
          <li>
            <div className="icon">
              <img src={suitcaseSvg} alt />
            </div>
            <div className="animation-chain overflow-hidden">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <h3>Front-End Web Developer</h3>
                <h4>AudioJungle</h4>
                <div className="date">Aug 2007 - Jan 2010</div>
              </ScrollAnimation>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error atque debitis
              tempora soluta, modi voluptatum sunt optio, ut quidem quam dolore. Unde minus quasi
              consequuntur consequatur, tempore repudiandae aperiam?
            </p>
          </li>
          <li>
            <div className="icon">
              <img src={capSvg} alt />
            </div>
            <div className="animation-chain overflow-hidden">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <h3>Professional Diploma in Graphic Design </h3>
                <h4>Beautiful College</h4>
                <div className="date">Sep 2012 - Aug 2013</div>
              </ScrollAnimation>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={capSvg} alt />
            </div>
            <div className="animation-chain overflow-hidden">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <h3>Master of Engineering in Computer Engineering</h3>
                <h4>Fantastic University</h4>
                <div className="date">Sep 2010 - Aug 2012</div>
              </ScrollAnimation>
            </div>
            <p>
              Thesis: Nulla, Omnis Vitae Illum Molestiae Rem<br />GPA: 4.0
            </p>
          </li>
          <li>
            <div className="icon">
              <img src={suitcaseSvg} alt />
            </div>
            <div className="animation-chain overflow-hidden">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <h3>Back-End Web Developer</h3>
                <h4>PhotoDune</h4>
                <div className="date">Aug 2007 - Jan 2010</div>
              </ScrollAnimation>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error atque debitis
              tempora soluta, modi voluptatum sunt optio, ut quidem quam dolore. Unde minus quasi
              consequuntur consequatur, tempore repudiandae aperiam?
            </p>
          </li>
          <li>
            <div className="icon">
              <img src={capSvg} alt />
            </div>
            <div className="animation-chain overflow-hidden">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <h3>Bachelor of Engineering in Computer Science</h3>
                <h4>Incredible University</h4>
                <div className="date">Aug 2005 - Aug 2009</div>
              </ScrollAnimation>
            </div>
            <p>
              First-class honors<br />GPA: 4.33
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
