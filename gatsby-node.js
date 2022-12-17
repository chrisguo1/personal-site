const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    /**
     * query to return all docs from that were fetched from github and transformed into html by gatsby-transformer-remark, this done in a descending order
     */
    return graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `
    ).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        // removes duplicate entries from the result, as they are generated at build time
        // the only ones that interest are the entries by the field slug that contains "/docs/"
        const filterDuplicateDocs = result.data.allMarkdownRemark.edges.filter(
            (item) => {
                return item.node.fields.slug.indexOf("/docs/") !== -1;
            }
        );

        filterDuplicateDocs.forEach((element, index) => {
            const previous =
                index === filterDuplicateDocs.length - 1
                    ? null
                    : filterDuplicateDocs[index + 1].node;
            const next =
                index === 0 ? null : filterDuplicateDocs[index - 1].node;
            createPage({
                component: require.resolve("./src/templates/article.js"),
                path: `${element.node.fields.slug}`, // it extracts the contents inside slug and generates the path based on it.
                context: {
                    slug: element.node.fields.slug,
                    previous,
                    next,
                },
            });
        });
    });
};
/**
 * Gatsby internal function to generate the special field slug,
 * so that it's easier to generate paths and query files and markdown(documents) based on this field
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    // checks if a a given element is of type Markdown(document type) and if so creates a physical path based on the information
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
