import React, { Component } from 'react';

import { withRouter } from 'react-router';

import styles from './compontent8.module.scss';

class Compontent8 extends Component {
  render() {
    console.log(styles);
    const { valor, otroValor } = this.props.match.params;
    const titleStyles = [styles.title];
    if (valor === '1') {
      titleStyles.push(styles.green);
    }
    return (
      <div
        className={styles.container}
        style={{ border: '1px solid silver', textAlign: 'left' }}
      >
        <h2 className={titleStyles.join(' ')}>Compontent 8</h2>
        {valor} {otroValor}
      </div>
    );
  }
}
export default withRouter(Compontent8);
