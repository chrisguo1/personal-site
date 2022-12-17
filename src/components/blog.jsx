import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const BlogItem = ({slug, title}) => {
    return <Link class='higlight-link' to={`/${slug}`}>{title}</Link>;
}


const Blog = () => {
    const articles = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        nodes {
            frontmatter {
                title
                tag
                slug
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
        /></li>
    ))
    return (
        <div>
            <ul>{allArticles}</ul>
        </div>
    )
}


export default Blog;