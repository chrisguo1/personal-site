import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div class="header-bar">
        <div class="header-logo">
          <Link class="nav-link" activeClassName="active" to="/">
            Chris Guo
          </Link>
        </div>
        <div class="nav-menu">
          <div class="nav-item">
            <Link class="nav-link" activeClassName="active" to="/personal">
              Personal
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
