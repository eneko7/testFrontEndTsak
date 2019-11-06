import React, { Component } from 'react';
import SearchResult from './SearchResult';
import Input from '../commonComponent/Input';
import Button from '../commonComponent/Button';
import styles from './HomeContent.scss';

const urlGoogle = 'https://www.google.com/search?igu=1&ei=&q=';
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
        this.iFrameRef.current.src = `${urlGoogle}${search}`;
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
        { showResults && <SearchResult iRef={this.iFrameRef} searchTerm={searchTerm} /> }
      </div>
    );
  }
}

export default HomeContent;
