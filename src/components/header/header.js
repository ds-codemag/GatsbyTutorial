import * as React from 'react';
import { Link } from '@reach/router';
import styles from './header.module.scss';

const Header = () => (
    <header>
        <div className="container">
            <nav>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/about/" className={styles.link}>About us</Link>
            </nav>
        </div>
    </header>
);

export default Header;
