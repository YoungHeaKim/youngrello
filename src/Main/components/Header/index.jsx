import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
import Logo from 'Static/Images/blue.png';
import { Button, useToggle } from 'components/index';

const cx = classNames.bind(styles);

const Header = () => {
  const [toggle, setToggle] = useToggle();

  return (
    <header className={cx('header')}>
      <img
        className={cx('header__img')}
        src={Logo}
        alt="youngrello 로고 이미지"
      />
      <h2 className={cx('header__title')}>Youngrello</h2>
      <div className={cx('header__nav')}>
        <Button
          className={cx('header__nav--btn')}
          onClick={() => setToggle(!toggle)}
        >
          Workspaces
          <div className={cx('header__nav--btn--tag')}>&lt;</div>
        </Button>
        {toggle && (
          <nav className={cx('header__nav--wrap')}>
            <header className={cx('header__nav--wrap--title')}>
              <div className={cx('header__nav--wrap--title--div')}>
                Workspaces
              </div>
              <Button
                className={cx('header__nav--wrap--title--close')}
                onClick={() => setToggle(false)}
              >
                &times;
              </Button>
            </header>
            <article className={cx('header__nav--wrap--article')}>
              <header>Your Workspaces</header>
            </article>
          </nav>
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
