import * as React from 'react';
import styles from './header.module.scss';
import { Link, StaticQuery, graphql } from 'gatsby';

const Header = ({data}) => (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.row}>
                <h1 className={styles.logo}>
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </h1>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/about" className={styles.link}>About us</Link>
                    <Link to="/blog" className={styles.link}>Blog</Link>
                    <Link to="/files" className={styles.link}>Files</Link>
                </nav>
            </div>
        </div>
    </header>
);

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <Header data={data} />
        )}
    />
);
