import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`chris`, `guo`, `website`]} />
    <Section>
      <h3>About Me:</h3>
      <p>
        I am a <span class="highlight">Quantitative Trader</span> living in
        Chicago. I work at the aptly named{" "}
        <span class="highlight"> Chicago Trading Company</span>. I am deeply
        involved with building, designing, and optimizing options market making
        execution systems.
      </p>
      <p>
        I received a Bachelor of Arts from{" "}
        <span class="highlight">Northwestern University</span> where I studied
        Math, Economics and Computer Science.
      </p>
    </Section>
    <Section>
      <h3>Things I have experience with:</h3>
      <ul>
        <li>Python (scripting and writing libraries)</li>
        <li>Kafka (KSQLDB)</li>
        <li>Databases (SQL, Snowflake)</li>
        <li>
          Data Engineering (getting data from one place to another in a usable
          format, DAGs, PySpark){" "}
        </li>
        <li>Data Science (Numpy, Pandas, Sklearn)</li>
        <li>
          Visualization and Building Dashboards (Jupyter, Matplotlib, Seaborn,
          Panel, Bokeh)
        </li>
      </ul>
    </Section>
    <Section>
      <h3>Writing:</h3>
      <p>
        In September 2018, I published my first book{" "}
        <a
          href="https://www.amazon.com/Breaking-Through-Finding-Passion-American/dp/1641371269/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1536677016&sr=1-2"
          target="_blank"
          rel="noreferrer"
        >
          <i>Breaking Through</i>
        </a>
        . It was the #1 bestseller on Amazon it its category!
      </p>
      <p>
        Check out my{" "}
        <a
          href="https://medium.com/@chris.guo"
          target="_blank"
          rel="noreferrer"
        >
          Medium blog
        </a>
        .
      </p>
    </Section>
    <Section>
      <h3>Reading:</h3>
      <p>
        Add me on{" "}
        <a
          href="https://www.goodreads.com/user/show/114063836-chris-guo"
          target="_blank"
          rel="noreferrer"
        >
          Goodreads
        </a>
        .
      </p>
    </Section>
  </Layout>
)

export default IndexPage
