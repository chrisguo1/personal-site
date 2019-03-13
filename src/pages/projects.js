import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>On this page I list cool projects I have worked on.</p>
    <div>
        <h2>Sprout</h2>
        <p>I founded and created a trek for NU students to visit startups in the Bay.</p>
        <ul>
          <li><a href="http://www.sproutnu.com" target="_blank">Sprout Website</a></li>
          <li><a href="https://medium.com/@chris.guo/the-best-way-to-inspire-college-students-interested-in-tech-and-startups-7f97b3dbe4b0" target="_blank">2018 Trip Recap</a></li>
          <li><a href="https://medium.com/epicnorthwestern/takeaways-from-sprout-2017-aadeffdcdad8" target="_blank">Takeaways from 2017 Trip</a></li>
          <li><a href="https://www.farley.northwestern.edu/what-we-are-up-to/news/articles/2018/student-entrep-groupbuds-during-sprout-san-francisco-trip.html" target="_blank">NU Farley Center Blog</a></li>
        </ul>
    </div>
    <Link to="/">Homepage</Link>
    <div><Link to="/writing/">Writing</Link></div>
    <div><Link to="/books/">Books</Link></div>
    <div><Link to="/personal/">Personal</Link></div>
  </Layout>
)

export default ProjectsPage
