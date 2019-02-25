import * as React from 'react';
import Layout from '../components/layout';

export default ({data}) => {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <h1>My Site's Files</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Relative path</th>
                                <th>Size</th>
                                <th>Extension</th>
                                <th>Birth time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.allFile.edges.map(({node}, index) => (
                                <tr key={index}>
                                    <td>{node.relativePath}</td>
                                    <td>{node.prettySize}</td>
                                    <td>{node.extension}</td>
                                    <td>{node.birthTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
};

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`;
