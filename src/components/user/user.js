import * as React from 'react';
import styles from './user.module.scss';

const User = (props) => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt={props.username} />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
);

export default User;
