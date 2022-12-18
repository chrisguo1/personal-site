import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Article = ({ data }) => {
    const { html } = data.markdownRemark;
    const { title, date } = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <div className="w-4/5 mx-auto mt-9 article">
                <section className="py-10">
                    <h1 className="py-4 capitalize">{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </section>
            </div>
        </Layout>
    );
};

export default Article;

export const query = graphql`
    query ArticleQuery($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`;
