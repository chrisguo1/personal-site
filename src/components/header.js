import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div class="header-bar">
        <div class="header-logo">
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            Chris Guo
          </Link>
        </div>
        <div class="nav-menu">
          <div class="nav-item">
            <Link
              to="/writing"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Writing
            </Link>
          </div>
          <div class="nav-item">
            <Link
              to="/books"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Books
            </Link>
          </div>
          <div class="nav-item">
            <Link
              to="/personal"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
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
