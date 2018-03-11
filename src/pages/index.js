import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Contact from '../components/Contact';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="is-full-height">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Contact />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
