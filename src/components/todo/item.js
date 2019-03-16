import React, { Component } from 'react';
import { TodoContext } from './todoContext';

import styles from './item.module.scss';

class Item extends Component {
  onRemoveMe(removeTask) {
    const { pos } = this.props;
    removeTask(pos);
  }
  onChangeStatus(changeStatus) {
    console.log(changeStatus, this);
    const { pos } = this.props;
    changeStatus(pos);
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
          <TodoContext.Consumer>
            {({ changeStatus, removeTask }) => (
              <React.Fragment>
                <button onClick={this.onChangeStatus.bind(this, changeStatus)}>
                  {this.getStatus()}
                </button>
                <button onClick={this.onRemoveMe.bind(this, removeTask)}>
                  x
                </button>
              </React.Fragment>
            )}
          </TodoContext.Consumer>
        </div>
      </div>
    );
  }
}

export default Item;
