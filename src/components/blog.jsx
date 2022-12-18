import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const BlogItem = ({slug, title}) => {
    return <Link class='higlight-link' to={`/blog/${slug}`}>{title}</Link>;
}


const Blog = () => {
    const articles = useStaticQuery(graphql`
    {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
            frontmatter {
                title
                slug
                date
            }
            html
            }
        }
    }
    `)

    const allArticles = articles.allMarkdownRemark.nodes.map((item, index) => (
        <li><BlogItem
        key={index}
        slug={item.frontmatter.slug}
        title={item.frontmatter.title}
        date ={item.frontmatter.date}
        /></li>
    ))
    return (
        <div>
            <ul>{allArticles}</ul>
        </div>
    )
}


export default Blog;