import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
import Logo from 'Static/Images/blue.png';
import { Button } from 'components/index';

const cx = classNames.bind(styles);

const Login = () => {
  const [login, setLogin] = useState({ id: '', pwd: '' });

  const changeInput = e => {
    setLogin({
      ...login,
      [e.target.type === 'text' ? 'id' : 'pwd']: e.target.value,
    });
  };

  return (
    <article className={cx('login')}>
      <section className={cx('login__header')}>
        <img
          className={cx('login__header--logo')}
          src={Logo}
          alt="youngrello 로고"
        />
        <h2 className={cx('login__header--title')}>Youngrello</h2>
      </section>
      <section className={cx('login__form')}>
        <h3 className={cx('login__form--title')}>Log in to Youngrello</h3>
        <form action="">
          <input
            className={cx('login__form--id')}
            type="text"
            value={login.id}
            onChange={changeInput}
            placeholder="아이디를 입력해주세요."
          />
          <input
            className={cx('login__form--pwd')}
            type="password"
            value={login.pwd}
            onChange={changeInput}
            placeholder="비밀번호를 입력해주세요."
          />
          {/* TODO: 여기서 로그인 구현 */}
          <Button className={cx('login__form--btn')} to="/">
            로그인
          </Button>
        </form>
      </section>
    </article>
  );
};

export default withRouter(Login);
