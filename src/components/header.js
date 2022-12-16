import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";

const Header = ({ siteTitle }) => (
    <header class="pb-6">
        <h1>Chris Guo</h1>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
