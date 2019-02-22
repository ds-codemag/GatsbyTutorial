import * as React from "react";
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default ({data}) => (
    <Layout>
        <section className="section">
            <div className="container">
                <h1>{data.site.siteMetadata.title}</h1>
                <h2>Amazing Pandas Eating Things</h2>
                <div>
                    <img
                        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                        alt="Group of pandas eating bamboo"
                    />
                </div>
            </div>
        </section>
    </Layout>
)

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
