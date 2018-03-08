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
          title: 'Software Engineering Manager, Architect',
          subtitle: 'Optum, UnitedHealth Group',
          dateRange: 'Feb 2016 - Now',
          icon: suitcaseSvg,
          content:
            'Hands on manager and architect for 15 engineers in 3 cross-functional teams involving development, quality, devops, and site reliability.\nResponsible for the full software lifecycle and production quality of Optum’s portal and developer enablement platform with 1 million users.'
        },
        {
          title: 'Sr. Full Stack Software Engineer',
          subtitle: 'Optum, UnitedHealth Group',
          dateRange: 'Sept 2015 - Feb 2016',
          icon: suitcaseSvg,
          content:
            'Leading code contributor, reviewer and architect utilizing a spring boot, mysql, angular 1 and jenkins stack.\nLed angular 1 code refactor to John Papa’s style guide.\nLed spring boot refactor to utilize dependency injection patterns, mocked unit testing and a Repo/Service layered architecture.\nIntroduced pull request based development and automated testing utilizing Jenkins 1 Delivery Pipeline plugin as a full CI/CD pipeline.'
        },
        {
          title: 'Development Team Lead',
          subtitle: 'Life Time Fitness',
          dateRange: 'Oct 2014 - Sept 2015',
          icon: suitcaseSvg,
          content:
            'Leading code contributor, reviewer and scrum leader on a .NET Web API, MS SQL, Angular 1 and Atlassian team.\nLed redesign to an “API First” Web API + Angular stack, also enabling other teams to consume our data.\nTransitioned to pull requests, Git Flow and automated testing.\nLearned CI best practices and led implementation for several teams, including mobile Xamarin team utilizing Atlassian Bamboo.'
        },
        {
          title: 'Full Stack Developer',
          subtitle: 'Life Time Fitness',
          dateRange: 'Jun 2013 - Oct 2014',
          icon: suitcaseSvg,
          content:
            'Quickly ramped up on each tier of a 3 tier stack utilizing MS SQL, .NET MVC, and JQuery.\nLed Angular 1 replacement of JQuery.'
        },
        {
          title: 'B.B.A in Management Information Systems & Finance',
          subtitle: 'University of Minnesota, Dulth',
          dateRange: 'Sept 2008 - May 2013',
          icon: capSvg,
          content: 'Minor in Accounting'
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
