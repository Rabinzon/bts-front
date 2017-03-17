import React from 'react';

class Search extends React.Component {
  render() {
    const {handle} = this.props;
    const styles = require('./Search.css');
    return (
      <div>
        <input placeholder="Эзләү" onChange={handle} className={styles.input} type="text"/>
      </div>
    );
  }
}

export default Search;
