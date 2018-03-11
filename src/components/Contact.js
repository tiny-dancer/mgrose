import React, { Component } from 'react';
import { withScriptjs, GoogleMap, withGoogleMap } from 'react-google-maps';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
  ))
);

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      message: ''
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const { name, email, title, message } = this.state;
    const currentLocation = 'Minneapolis, MN USA';
    return (
      <section id="contact" className="section-contact bgDarkGray flex-responsive">
        <div className="left">
          <a href="#" className="map-view-switch">
            Map
          </a>
          <div
            className="map-canvas"
            style={{
              backgroundImage: `url(${`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
                currentLocation
              )}&zoom=13&size=1280x1280&maptype=roadmap&key=${
                process.env.GATSBY_GOOGLE_MAPS_KEY
              }`}`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}
          />
          <div className="contact-main">
            <h2>Contact</h2>
            <div className="row contact-info animation-chain overflow-hidden">
              <div className="col-md-4">
                <div className="icon">
                  <span className="lnr lnr-map-marker" />
                </div>
                <h3>Current Location</h3>
                <p>{currentLocation}</p>
              </div>
              {/* <div className="col-md-4">
                <div className="icon">
                  <span className="lnr lnr-smartphone" />
                </div>
                <h3>Telephone</h3>
                <p>(852) 1234-5678</p>
              </div> */}
              <div className="col-md-4">
                <div className="icon">
                  <span className="lnr lnr-envelope" />
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:mg@mgro.se">mg@mgro.se</a>
                </p>
              </div>
            </div>
            <form name="contact" id="contact-form" onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <input
                    type="text"
                    id="contact-form-name"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                    className={name ? 'focused' : ''}
                  />
                  <label htmlFor="contact-form-name">Name</label>
                  <svg viewBox="0 0 1085.41 36" preserveAspectRatio="none">
                    <path
                      d="M69.29,293.79h370.5c86.11,0,86.11-25,172.21-25s86.11,25,172.21,25h370.5"
                      transform="translate(-69.29 -268.29)"
                    />
                  </svg>
                </li>
                <li>
                  <input
                    type="text"
                    name="email"
                    id="contact-form-email"
                    value={email}
                    onChange={this.handleChange}
                    className={email ? 'focused' : ''}
                  />
                  <label htmlFor="contact-form-email">Email</label>
                  <svg viewBox="0 0 1085.41 36" preserveAspectRatio="none">
                    <path
                      d="M69.29,293.79h370.5c86.11,0,86.11-25,172.21-25s86.11,25,172.21,25h370.5"
                      transform="translate(-69.29 -268.29)"
                    />
                  </svg>
                </li>
                <li>
                  <input
                    type="text"
                    name="title"
                    id="contact-form-title"
                    value={title}
                    onChange={this.handleChange}
                    className={title ? 'focused' : ''}
                  />
                  <label htmlFor="contact-form-title">Title</label>
                  <svg viewBox="0 0 1085.41 36" preserveAspectRatio="none">
                    <path
                      d="M69.29,293.79h370.5c86.11,0,86.11-25,172.21-25s86.11,25,172.21,25h370.5"
                      transform="translate(-69.29 -268.29)"
                    />
                  </svg>
                </li>
                <li>
                  <textarea
                    name="message"
                    id="contact-form-content"
                    defaultValue={''}
                    value={message}
                    onChange={this.handleChange}
                    className={message ? 'focused' : ''}
                  />
                  <label htmlFor="contact-form-content">Content</label>
                  <svg viewBox="0 0 1085.41 36" preserveAspectRatio="none">
                    <path
                      d="M69.29,293.79h370.5c86.11,0,86.11-25,172.21-25s86.11,25,172.21,25h370.5"
                      transform="translate(-69.29 -268.29)"
                    />
                  </svg>
                </li>
              </ul>
              <input id="#contact-form-submit-btn" type="submit" defaultValue="Drop Me a Line" />
            </form>
            <div id="message" />
          </div>
        </div>
        <div className="right">
          <ul className="connect">
            <li>
              <a href="mailto:mg@mgro.se">
                <span className="icon-envelope" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <span className="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-twitter" />
              </a>
            </li> */}
            <li>
              <a href="https://linkedin.com/in/matthew-grose-98753b26/">
                <span className="icon-linkedin" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <span className="icon-dribbble" />
              </a>
            </li> */}
          </ul>
        </div>
      </section>
    );
  }
}
