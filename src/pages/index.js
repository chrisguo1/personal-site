import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`chris`, `guo`, `website`]} />
    <h1>Welcome to my site :)</h1>
    <p>I'm a senior at Northwestern University, studying Math, Economics and Computer Science.</p>
    <p>My current interests: quantitative finance, markets, machine learning, and mechanism design.</p>
    <p>I also like helping young people pursue their dreams, writing essays and light roast black coffee.</p>
    <p>In September 2018, I published my first book <a href="https://www.amazon.com/Breaking-Through-Finding-Passion-American/dp/1641371269/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1536677016&sr=1-2" target="_blank">Breaking Through</a>.
       It was the #1 bestseller on Amazon it its category!
    </p>
    <div><Link to="/projects/">Projects</Link></div>
    <div><Link to="/writing/">Writing</Link></div>
    <div><Link to="/books/">Books</Link></div>
    <div><Link to="/personal/">Personal</Link></div>
  </Layout>
)

export default IndexPage


/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
  </div>*/