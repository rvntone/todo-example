import React, { Component } from 'react';

import styles from './list.module.scss';
import Item from './item';

export default class List extends Component {
  onChangeItemStatus(pos) {
    this.props.changeStatus(pos);
  }
  onRemoveTask(pos) {
    this.props.removeTask(pos);
  }

  renderItems() {
    const { list } = this.props;
    if (list.length === 0) {
      return <div>No items</div>;
    }
    return list.map((item, pos) => {
      return (
        <Item
          removeTask={this.onRemoveTask.bind(this, pos)}
          changeStatus={this.onChangeItemStatus.bind(this, pos)}
          key={pos}
          item={item}
        />
      );
    });
  }
  render() {
    return <div className={styles.list}>{this.renderItems()}</div>;
  }
}
