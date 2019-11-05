import React, { Component } from 'react';
import Input from '../commonComponent/Input';
import Button from '../commonComponent/Button';
import styles from './HomeContent.scss';

class HomeContent extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      showResults: false,
    };
    this.iFrameRef = React.createRef();
  }

  onChangeInputHendler = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  onClickButtonHendler = () => {
    const { searchTerm } = this.state;
    if (searchTerm && searchTerm !== '') {
      const search = searchTerm.replace(/ /g, '+');
      this.setState({
        showResults: true,
      }, () => {
        this.iFrameRef.current.src = `https://www.google.com/search?igu=1&ei=&q=${search}`;
      });
    }
  };

  enterPress = (e) => {
    if (e.keyCode === 13) {
      this.onClickButtonHendler();
    }
  };

  render() {
    const { searchTerm, showResults } = this.state;
    return (
      <div className={styles.content}>
        <Input
          type="text"
          name="searchTerm"
          placeholder="Search term"
          value={searchTerm}
          onChangeHendler={this.onChangeInputHendler}
          enterPress={this.enterPress}
        />
        <Button text="Search" action={this.onClickButtonHendler} />
        { showResults
          && (
          <div className={styles.content_searchingResultWrapper}>
            <div className={styles.content_searchResultTitle}>
                Searching results by query&nbsp;&nbsp;
              <span className={styles.queryWord}>{searchTerm}</span>
            </div>
            <div className={styles.results}>
              <iframe ref={this.iFrameRef} title="searhResult" className={styles.iframeResults} />
            </div>
          </div>
          )
        }
      </div>
    );
  }
}

export default HomeContent;
