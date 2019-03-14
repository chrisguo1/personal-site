import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PersonalPage = () => (
  <Layout>
    <SEO title="Personal" />
    <h1>Personal</h1>
    
    <p>On this page I list stuff I have done that nobody else probably cares about.</p>
    
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
    <div style={{paddingBottom: 30,}}>
      <a href="https://www.collegeswimming.com/swimmer/241059/">More Best Times</a>
    </div>
    
    <h2>Running PRs </h2>
    <ul>
      <li>Half-Marathon: May 19, 2019</li>
      <li>Life Goal: Qualify for Boston Marathon</li>
    </ul>
    
    <h2>Lifting PRs</h2>
    <ul>
      <li>Deadlift (Conventional, Overhand Grip): 3-reps 265 lb</li>
      <li>Bench Press: 5 reps 175 lb</li>
      <li>Back Squat: 4-reps 245 lb</li>
      <li>Overhead Press: 10-reps 95 lb</li>
    </ul>

    <h2>Countries Visited</h2>
    <ul>
      <li>United States</li>
      <li>China</li>
     </ul>
     <p>There's more, but I'm too lazy to add. Change this to a table not list format.</p>

    <h2>Languages</h2>
    <ul>
      <li><b>English</b>: Native.</li>
      <li><b>Mandarin</b>: Conversational Fluency. 
          I can read at the 4th grade level. 
          I can write at the 3rd grade level.
      </li>
      <li><b>Spanish</b>: AP Spanish level. I can conjugate verbs in the present and sometimes preterite tense.</li>
    </ul>

    <Link to="/">Homepage</Link>
    <div><Link to="/writing/">Writing</Link></div>
    <div><Link to="/projects/">Projects</Link></div>
    <div><Link to="/books/">Books</Link></div>
  </Layout>
)

export default PersonalPage