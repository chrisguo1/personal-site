import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`chris`, `guo`, `website`]} />
        <Section>
            <h2>About Me</h2>
            <p>
                I am a Quantitative Trader living in Chicago. I work at the
                aptly named Chicago Trading Company. I am deeply involved with
                building, designing, and optimizing options market making
                execution systems.
            </p>
            <p>
                I received a Bachelor of Arts from Northwestern University where
                I studied Math, Economics and Computer Science.
            </p>
        </Section>
        <Section>
            <h2>Experience</h2>
            <ul class="list-disc list-inside">
                <li>Python</li>
                <li>Batch Data Processing - PySpark SQL, tick data</li>
                <li>Stream Processing - PySpark Structured Streaming</li>
                <li>Databases - Snowflake, Redis, Mongo</li>
                <li>Data Science - Numpy, Pandas</li>
                <li>Dashboarding - Plotly Dash, Sigma Computing</li>
            </ul>
        </Section>
        <Section>
            <h2>Writing</h2>
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
            <h2>Reading</h2>
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
);

export default IndexPage;
