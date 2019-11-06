import React from 'react';
import propTypes from 'prop-types';
import styles from './SearchResult.scss';

const SearchResult = ({ iRef, searchTerm }) => (
  <div className={styles.content_searchingResultWrapper}>
    <div className={styles.content_searchResultTitle}>
        Searching results by query&nbsp;&nbsp;
      <span className={styles.queryWord}>{searchTerm}</span>
    </div>
    <div className={styles.results}>
      <iframe ref={iRef} title="searhResult" className={styles.iframeResults} />
    </div>
  </div>
);

SearchResult.propTypes = {
  iRef: propTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.any }),
  ]).isRequired,
  searchTerm: propTypes.string.isRequired,
};

export default SearchResult;
