import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
import { Button, useToggle } from 'components';

const cx = classNames.bind(styles);

const Detail = ({ match }) => {
  const { _id, name } = match.params;
  const [toggle, setToggle] = useToggle(false);

  return (
    <main className={cx('detail')}>
      {!toggle ? (
        <Button className={cx('detail__close')} onClick={() => setToggle(true)}>
          <div className={cx('detail__close--logo')}>{name.split('')[0]}</div>
          <div className={cx('detail__close--arrow')}>&gt;&gt;</div>
        </Button>
      ) : (
        <Button className={cx('detail__open')} onClick={() => setToggle(false)}>
          <div className={cx('detail__open--header')}>
            <div className={cx('detail__open--header--logo')}>
              {name.split('')[0]}
            </div>
            <div className={cx('detail__open--header--title')}>{name}</div>
            <div className={cx('detail__open--header--arrow')}>&gt;&gt;</div>
          </div>
        </Button>
      )}
      <article className={cx('detail__article')}>
        <section></section>
      </article>
    </main>
  );
};

export default withRouter(Detail);
