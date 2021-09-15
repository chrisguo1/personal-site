import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"

const PersonalPage = () => (
  <Layout>
    <SEO title="Personal" />
    <Section>
      <h3>Personal</h3>
      <p>
        Here I list stuff I've done. I use this to keep track of my
        accomplishments and plan goals not related to work.
      </p>
    </Section>
    <Section>
      <h3>Swimming PRs</h3>
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
      <h3>Running PRs </h3>
      <ul>
        <li>Half-Marathon: May 19, 2019</li>
        <li>Life Goal: Qualify for Boston Marathon</li>
      </ul>

      <h3>Lifting PRs</h3>
      <ul>
        <li>Deadlift (Conventional, Overhand Grip): 3-reps 265 lb</li>
        <li>Bench Press: 5 reps 175 lb</li>
        <li>Back Squat: 4-reps 245 lb</li>
        <li>Front Squat: 265 lb</li>
        <li>Clean: 80kg</li>
      </ul>
    </Section>
  </Layout>
)

export default PersonalPage
