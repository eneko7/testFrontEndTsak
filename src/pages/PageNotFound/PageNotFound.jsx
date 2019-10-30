import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../components/commonComponent/ErrorBoundary/ErrorBoundary';
import styles from './PageNotFound.scss';

const PageNotFound = () => (
  <ErrorBoundary>
    <Header />
    <article className={styles.page_not_found_wrap}>
      <span className={styles.page_not_found_wrap__title}>404 ERROR</span>
      <span className={styles.page_not_found_wrap__title}>Page Not Found</span>
    </article>
    <Footer />
  </ErrorBoundary>
);

export default PageNotFound;
