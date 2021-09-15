import React from "react"
import PropTypes from "prop-types"

import "./section.css"

const Section = ({ children }) => <section>{children}</section>

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
