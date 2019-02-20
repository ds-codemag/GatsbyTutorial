import * as React from 'react';
import Header from './header/header'

import '../styles/stylesheet.css';

const Layout = (props) => (
    <div>
        <Header/>
        <main>
            {props.children}
        </main>
    </div>
);

export default Layout;
