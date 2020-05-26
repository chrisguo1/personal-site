import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <h1>Writing</h1>
    <p>This page is for sharing my writing.</p>

    <p>
      Check out my book{" "}
      <a
        href="https://www.amazon.com/Breaking-Through-Finding-Passion-American/dp/1641371269/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1536677016&sr=1-2"
        target="_blank"
      >
        <i>Breaking Through</i>
      </a>
      .
    </p>

    <p>
      Check out my{" "}
      <a href="https://medium.com/@chris.guo" target="_blank">
        Medium blog
      </a>
      .
    </p>

    <p>
      My goal is to eventually write more long form essays like{" "}
      <a href="http://www.paulgraham.com/" target="_blank">
        Paul Graham
      </a>
      .
    </p>
  </Layout>
)

export default WritingPage
