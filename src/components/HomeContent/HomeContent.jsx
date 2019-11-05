/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import Input from '../commonComponent/Input';
import Button from '../commonComponent/Button';
import styles from './HomeContent.scss';

class HomeContent extends Component {
  constructor() {
    super();
    this.iFrameRef = React.createRef();
    this.state = {
      searchTerm: '',
      showResults: false,
      iframeContent: '',
    };
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
        setTimeout(() => {
          console.log(this.iFrameRef.current.contentWindow);
        }, 1000);
        this.setState({
          iframeContent: '',
        });
      });
    }
  };

  enterPress = (e) => {
    if (e.keyCode === 13) {
      this.onClickButtonHendler();
    }
  };

  render() {
    const { searchTerm, showResults, iframeContent } = this.state;
    console.log(iframeContent);
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
              <iframe ref={this.iFrameRef} title="searhResult" className={styles.iframeResults} onClick={this.clickHandleOnIframe} />
            </div>
          </div>
          )
        }
      </div>
    );
  }
}

export default HomeContent;
