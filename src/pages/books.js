import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BooksPage = () => (
  <Layout>
    <SEO title="Books" />
    <h1>Books</h1>
    <p>
      On this page I list books I read that influenced me or I just enjoy. This
      is a living document and I might even write some book summaries later.
    </p>
    <h2>Novels</h2>
    <ul>
      <li>
        <i>A Prayer for Owen Meany</i> by John Irving
      </li>
      <li>
        <i>The Dharma Bums</i> by Jack Kerouac
      </li>
    </ul>
    <h2>On Work and Startups</h2>
    <ul>
      <li>
        <i>Zero to One</i> by Peter Thiel
      </li>
      <li>
        <i>The 4-Hour Workweek</i> by Tim Ferriss
      </li>
    </ul>
    <h2>Memoirs</h2>
    <ul>
      <li>
        <i>
          Reading with Patrick: A Teacher, a Student, and the Life-Changing
          Power of Books
        </i>{" "}
        by Michelle Kuo
      </li>
      <li>
        <i>Educated</i> by Tara Westover
      </li>
    </ul>
  </Layout>
)

export default BooksPage

/* <h2>On Politics</h2>
<ul>
  <li><i>Theorizing Liberation</i> by Gary Okihiro</li>
  <li><i>Pedagogy of the Oppressed</i> by Paulo Freire</li>
</ul>  */
