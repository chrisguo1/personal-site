import React from "react";
import PropTypes from "prop-types";

import "./section.css";

const Section = ({ children }) => <section class="pb-4">{children}</section>;

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Section;
