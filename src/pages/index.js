import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({data}) => (
    <Layout>
        <section className="section">
            <div className="container">
                <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
                <p>
                    What do I like to do? Lots of course but definitely enjoy building
                    websites.
                </p>
                <p>
                    {data.site.siteMetadata.description}
                </p>
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                description
            }
        }
    }
`;
