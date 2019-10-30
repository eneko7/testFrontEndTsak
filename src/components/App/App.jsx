import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import PageNotFound from '../../pages/PageNotFound';
import styles from './App.scss';

const App = () => (
  <main className={styles.main}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </main>

);

export default App;
