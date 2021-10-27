/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
import { Home, Login, Detail } from 'Main/pages/index';
import { MetaTag } from 'components/index';
import { Header } from 'Main/components';

const cx = classNames.bind(styles);

const Main = ({ location }) => {
  const { pathname } = location;

  return (
    <div className={cx('main')}>
      <MetaTag
        keywords="younghea, youngrello"
        description="용해의 개인 프로젝트"
        title="Youngrello"
      />
      {pathname !== '/login' && <Header />}

      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path={`/:_id/:name`} component={Detail} />
            <Route exact path="/login" component={Login} />
            <Redirect path="*" to="/" />
          </Switch>
        )}
      />
    </div>
  );
};

export default withRouter(Main);
