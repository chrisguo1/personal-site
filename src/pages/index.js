import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import Seo from "../components/seo";
import Blog from "../components/blog";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" keywords={[`Chris`, `Guo`]} />
        <Section title="About Me">
            <ul>
                <li>
                    Working at{" "}
                    <span class="highlight">Chicago Trading Company</span> as a
                    Quantitative Trader. Building smart execution systems and
                    designing quant research frameworks.
                </li>
                <li>
                    Graduated from{" "}
                    <span class="highlight">Northwestern University</span> where
                    I studied Math, Economics, and Computer Science.
                </li>
            </ul>
        </Section>
        <Section title="Experience">
            <ul>
                <li>Python</li>
                <li>Batch Data Processing - PySpark SQL, tick data</li>
                <li>Stream Processing - PySpark Structured Streaming</li>
                <li>Databases - Snowflake, Redis, Mongo</li>
                <li>Data Science - Numpy, Pandas</li>
                <li>Dashboarding - Plotly Dash, Sigma Computing</li>
            </ul>
        </Section>
        <Section title="Blog">
            <Blog />
        </Section>
    </Layout>
);

export default IndexPage;
