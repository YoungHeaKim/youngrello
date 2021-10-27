import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
import { Button } from 'components/index';

const cx = classNames.bind(styles);

const Aside = ({ location }) => {
  const { pathname } = location;

  return (
    <aside className={cx('aside')}>
      <nav className={cx('aside__nav')}>
        <ul className={cx('aside__nav--ul')}>
          {/* TODO: 로그인한 user의 "/name/boards"와 같은 식으로 들어가야함 */}
          <li className={cx('aside__nav--ul--li')}>
            <Button
              to="/"
              className={cx(
                'aside__nav--ul--li--btn',
                pathname === '/' && 'aside__active'
              )}
            >
              Boards
            </Button>
          </li>
        </ul>
      </nav>
      <header className={cx('aside__header')}>
        <div className={cx('aside__header--title')}>Workspaces</div>
        <Button className={cx('aside__header--btn')}>&#43;</Button>
      </header>
      <nav className={cx('aside__nav')}>
        <ul className={cx('aside__nav--ul')}></ul>
      </nav>
    </aside>
  );
};

export default withRouter(Aside);
