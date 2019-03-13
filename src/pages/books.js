import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BooksPage = () => (
  <Layout>
    <SEO title="Books" />
    <h1>Books</h1>
    <p>On this page I list books I read that influenced me or I just enjoy. I might even write some book summaries later.</p>
    <h2>Novels</h2>
    <ul>
      <li><i>A Prayer for Owen Meany</i> by John Irving</li>
      <li><i>The Dharma Bums</i> by Jack Kerouac</li>
    </ul>
    <h2>On Politics</h2>
    <ul>
      <li><i>Theorizing Liberation</i> by Gary Okihiro</li>
      <li><i>Pedagogy of the Oppressed</i> by Paulo Freire</li>
    </ul>

    <h2>On Work and Startups</h2>
    <ul>
      <li><i>Zero to One</i> by Peter Thiel</li>
      <li><i>The 4-Hour Workweek</i> by Tim Ferriss</li>
    </ul>

    <Link to="/">Homepage</Link>
    <div><Link to="/projects/">Projects</Link></div>
    <div><Link to="/writing/">Writing</Link></div>
    <div><Link to="/personal/">Personal</Link></div>
  </Layout>
)

export default BooksPage
