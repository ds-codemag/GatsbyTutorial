import * as React from "react";
import { css } from "@emotion/core";
import { rhythm, scale } from '../utils/typography';
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';

export default ({data}) => (
    <Layout>
        <section className="section">
            <div className="container">
                <h1>Amazing Pandas Eating Things</h1>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <div key={node.id}>
                        <h2
                            css={css`
                                margin-bottom: ${rhythm(0.25)}
                            `}
                        >
                            <Link
                                to={node.fields.slug}
                                css={css`
                                    color: #000;
                                    text-decoration: none;
                                    transition: color .3s;
                                    &:hover {
                                        color: #777;
                                    }
                                `}
                            >
                                {node.frontmatter.title}
                            </Link>
                        </h2>

                        <div
                            css={css`
                                margin-bottom: ${rhythm(0.5)};
                            `}
                        >
                            <span
                                css={css`
                                    ${scale(-0.25)}
                                    font-weight: 600
                                `}
                            >
                                {node.frontmatter.date}
                            </span>
                        </div>

                        <p>
                            {node.excerpt}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query {
      allMarkdownRemark (
        sort: {
          fields: [frontmatter___date]
          order: DESC
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY", locale: "pl")
            }
            excerpt(pruneLength: 25, truncate: false)
          }
        }
      }
    }
`;
