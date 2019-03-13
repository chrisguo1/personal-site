import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <h1>Writing</h1>
    <p>This page is for sharing my writing.</p>

    <div 
      style={{paddingBottom: 30}}
    >
      Check out my book <a href="https://www.amazon.com/Breaking-Through-Finding-Passion-American/dp/1641371269/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1536677016&sr=1-2" target="_blank">Breaking Through</a>.
    </div>

    <div 
      style={{paddingBottom: 30}}
    >
      Check out my <a href="https://medium.com/@chris.guo" target="_blank">Medium blog</a>.
    </div>

    <Link to="/">Homepage</Link>
    <div><Link to="/projects/">Projects</Link></div>
    <div><Link to="/books/">Books</Link></div>
    <div><Link to="/personal/">Personal</Link></div>
  </Layout>
)

export default WritingPage
