import * as React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
