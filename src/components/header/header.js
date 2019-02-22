import * as React from 'react';
import styles from './header.module.scss';
import { Link } from 'gatsby';

const Header = () => (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.row}>
                <h1 className={styles.logo}>
                    <Link to="/">Gatsby tutorial</Link>
                </h1>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/about" className={styles.link}>About us</Link>
                    <Link to="/blog" className={styles.link}>Blog</Link>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;
