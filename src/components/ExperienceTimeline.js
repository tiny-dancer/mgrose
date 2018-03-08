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

      <p>
        {props.children ||
          (props.content &&
            props.content.split('\n').map(i => {
              return <div>{i}</div>;
            }))}
      </p>
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
          icon: suitcaseSvg,
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta exercitationem nam perferendis' +
            'tempora eius repellat expedita numquam, beatae eaque nihil? Aliquam architecto voluptatum' +
            'provident animi, excepturi fugit ut! Impedit, eum!'
        },
        {
          title: 'Front-End Web Developer',
          subtitle: 'AudioJungle',
          dateRange: 'Aug 2007 - Jan 2010',
          icon: suitcaseSvg,
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error atque debitis tempora soluta, modi voluptatum sunt optio, ut quidem quam dolore. Unde minus quasi consequuntur consequatur, tempore repudiandae aperiam?'
        },
        {
          title: 'Professional Diploma in Graphic Design',
          subtitle: 'Beautiful College',
          dateRange: 'Sep 2012 - Aug 2013',
          icon: capSvg
        },
        {
          title: 'Master of Engineering in Computer Engineering',
          subtitle: 'Fantastic University',
          dateRange: 'Sep 2010 - Aug 2012',
          icon: capSvg,
          content: 'Thesis: Nulla, Omnis Vitae Illum Molestiae Rem\nGPA: 4.0'
        },
        {
          title: 'Back-End Web Developer',
          subtitle: 'PhotoDune',
          dateRange: 'Aug 2007 - Jan 2010',
          icon: suitcaseSvg,
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error atque debitis tempora soluta, modi voluptatum sunt optio, ut quidem quam dolore. Unde minus quasi consequuntur consequatur, tempore repudiandae aperiam?'
        },
        {
          title: 'Bachelor of Engineering in Computer Science',
          subtitle: 'Incredible University',
          dateRange: 'Aug 2005 - Aug 2009',
          icon: capSvg,
          content: 'First-class honors\nGPA: 4.33'
        }
      ]
    };
  }

  render() {
    return (
      <section id="experience-education" className="section-experience-education bgPrimaryColor">
        <h2>Experience &amp; Education</h2>
        <ul className="timeline">
          {this.state.items.map((item, index) => {
            return (
              <TimelineItem key={item.title} {...item} align={index % 2 == 0 ? 'right' : 'left'} />
            );
          })}
        </ul>
      </section>
    );
  }
}
