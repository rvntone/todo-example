import React, { Component } from 'react';

import styles from './item.module.scss';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onRemoveMe = this.onRemoveMe.bind(this);
  }
  onRemoveMe() {
    this.props.removeTask();
  }
  onChangeStatus() {
    this.props.changeStatus();
  }
  addStatus(itemClassName) {
    const { item } = this.props;
    const { status } = item;
    if (status === 2) {
      itemClassName.push(styles.done);
      return;
    }
    if (status === 1) {
      itemClassName.push(styles.inProgress);
      return;
    }
  }
  getStatus() {
    const { item } = this.props;
    if (item.status === 0) {
      return 'to do';
    }
    if (item.status === 1) {
      return 'in progress';
    }
    return 'done';
  }
  render() {
    const { item } = this.props;
    const itemClassName = [styles.item];
    this.addStatus(itemClassName);
    return (
      <div className={itemClassName.join(' ')}>
        <div className={styles.title}>{item.taskName}</div>
        <div className={styles.status}>
          <button onClick={this.onChangeStatus}>{this.getStatus()}</button>
          <button onClick={this.onRemoveMe}>x</button>
        </div>
      </div>
    );
  }
}
