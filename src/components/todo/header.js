import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
  }
  async createNew(item) {
    const config = {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = `http://localhost:3010/list`;
    const response = await fetch(url, config);
    return await response.json();
  }
  async update(item) {
    const config = {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = `http://localhost:3010/list/${item.id}`;
    const response = await fetch(url, config);
    return await response.json();
  }
  async delete(item) {
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = `http://localhost:3010/list/${item.id}`;
    await fetch(url, config);
  }
  async onSaveClick() {
    const newList = [];
    const { list } = this.props;
    for (let pos in list) {
      const item = list[pos];
      if (!item.id) {
        if (item.deleted) {
          continue;
        }
        newList.push(await this.createNew(item));
        continue;
      }
      if (item.id && item.deleted) {
        await this.delete(item);
        continue;
      }
      newList.push(await this.update(item));
    }
    this.props.setList(newList);
  }
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.title}>Todo list</div>
        <div className={styles.tools}>
          <Link to="/add" className={styles.tool}>
            +
          </Link>
          <button onClick={this.onSaveClick}>Save</button>
        </div>
      </div>
    );
  }
}
