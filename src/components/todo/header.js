import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.title}>Todo list</div>
        <div className={styles.tools}>
          <Link to="/add" className={styles.tool}>
            +
          </Link>
        </div>
      </div>
    );
  }
}
