import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <article className={cx('home')}>
      <section></section>
    </article>
  );
};

export default withRouter(Home);
