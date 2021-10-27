import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
import { Aside } from 'Main/components';
import { Button } from 'components';
import { Boards } from 'Static/Json/boards.json';

const cx = classNames.bind(styles);

const Home = () => {
  const [list] = useState(Boards);

  return (
    <div className={cx('home')}>
      <Aside />
      <article className={cx('home__article')}>
        <h3 className={cx('home__article--header')}>YOUR WORKSPACES</h3>
        {list.map((item, i) => (
          <article key={i} className={cx('home__article--list')}>
            <header className={cx('home__article--list--header')}>
              <div className={cx('home__article--list--header--logo')}>
                {item.name.split('')[0]}
              </div>
              <h3 className={cx('home__article--list--header--name')}>
                {item.name}
              </h3>
            </header>
            <ul className={cx('home__article--list--wrap')}>
              {item.lists.map((board, i) => (
                <li key={i} className={cx('home__article--list--wrap--item')}>
                  <Button
                    className={cx('home__article--list--wrap--item--btn')}
                    to={`/${board._id}/${board.name}`}
                  >
                    {board.name}
                  </Button>
                </li>
              ))}
              <li className={cx('home__article--list--wrap--new')}>
                <Button className={cx('home__article--list--wrap--new--btn')}>
                  Create new Board
                </Button>
              </li>
            </ul>
          </article>
        ))}
      </article>
    </div>
  );
};

export default withRouter(Home);
