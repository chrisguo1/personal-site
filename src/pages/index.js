import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`chris`, `guo`, `website`]} />
    <p>
      I am <span class="highlight">Quantitative Trading Analyst</span> living
      Chicago. I work at the aptly named{" "}
      <span class="highlight"> Chicago Trading Company</span> where I'm part of
      the options market making execution team. To improve trading results, I
      use Python to create data visualizations, which help me analyze trading
      decisions and their performance.
    </p>
    <p>
      I received a Bachelor of Arts from{" "}
      <span class="highlight">Northwestern University</span> where I studied
      Math, Economics and Computer Science.
    </p>
    <p>
      My current interests: quantitative finance, markets, machine learning, and
      mechanism design. I also like writing essays, driving across the US to
      stay in middle-of-nowhere AirBnBs, watching Olympic Weightlifting YouTube
      videos, learning Go (the game), and drinking light roast black coffee.
    </p>
    <p>
      In September 2018, I published my first book{" "}
      <a
        href="https://www.amazon.com/Breaking-Through-Finding-Passion-American/dp/1641371269/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1536677016&sr=1-2"
        target="_blank"
      >
        <i>Breaking Through</i>
      </a>
      . It was the #1 bestseller on Amazon it its category!
    </p>

    <p>Want to connect? My email is christopheryguo [at] gmail [dot] com.</p>
  </Layout>
)

export default IndexPage
