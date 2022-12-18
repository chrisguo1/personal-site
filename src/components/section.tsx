import React from "react";
import PropTypes from "prop-types";

import "./section.css";

class Section extends React.Component {
  render() {
    return (
        <section class="pb-4">
          <h2>{this.props.title}</h2>
          {this.props.children}
        </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};



export default Section;
