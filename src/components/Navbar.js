import React, { Component } from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  openMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <nav className={this.state.isOpen ? 'opened' : ''}>
        <button className="open-menu" onClick={this.openMenu}>
          Menu
        </button>
        <ul className={this.state.isOpen ? 'menu show-menu-items' : 'menu'}>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills-knowledge">Skills & Knowledge</a>
          </li>
          <li>
            <a href="#experience-education">Experience & Education</a>
          </li>
          {/* <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#design-process">Design Process</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>*/}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
