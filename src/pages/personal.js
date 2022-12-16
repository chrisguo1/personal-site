import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";

const PersonalPage = () => (
    <Layout>
        <SEO title="Personal" />
        <Section>
            <h2>Personal</h2>
            <p>
                Here I list stuff I've done. I use this to keep track of my
                accomplishments and plan goals not related to work.
            </p>
        </Section>
        <Section>
            <h2>Swimming PRs</h2>
            <ul>
                <li>100 SCY Breast: 56.41</li>
                <li>100 LCM Breast: 1:06.74</li>
                <li>200 SCY Breast: 2:05.39</li>
                <li>200 SCY Fly: 1:51.63</li>
                <li>200 SCY IM: 1:52.03</li>
                <li>400 SCY IM: 4:04.57</li>
                <li>200 SCY Free: 1:42.58</li>
                <li>500 SCY Free: 4:40.30</li>
            </ul>
            <p>
                <a href="https://www.collegeswimming.com/swimmer/241059/">
                    More Best Times
                </a>
            </p>
        </Section>
        <Section>
            <h2>Running PRs </h2>
            <ul>
                <li>Half-Marathon: May 19, 2019</li>
                <li>Life Goal: Qualify for Boston Marathon</li>
            </ul>

            <h2>Lifting PRs</h2>
            <ul>
                <li>Bench Press: 205 lb</li>
                <li>Clean: 100kg</li>
            </ul>
        </Section>
    </Layout>
);

export default PersonalPage;
