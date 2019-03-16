import React, { Component } from 'react';

import { TodoContext } from './todoContext';
import styles from './list.module.scss';
import Item from './item';

class List extends Component {
  renderItems() {
    const { list } = this.context;
    if (list.length === 0) {
      return <div>No items</div>;
    }
    return list.map((item, pos) => {
      if (item.deleted) {
        return null;
      }
      return <Item key={pos} pos={pos} item={item} />;
    });
  }
  render() {
    return <div className={styles.list}>{this.renderItems()}</div>;
  }
}

List.contextType = TodoContext;
export default List;
