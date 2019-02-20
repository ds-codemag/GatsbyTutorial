import * as React from 'react';
import { Link } from '@reach/router';

const Header = ({
    siteTitle = 'page',
    children
}) => (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about/">About us</Link>
        </nav>
    </header>
);

export default Header;
