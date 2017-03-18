import React from 'react';
import classNames from 'helpers/classNames';
import styles from './Search.css';

const cn = classNames(styles);

class Search extends React.Component {
  render() {
    const {handle} = this.props;
    return (
      <div>
        <input placeholder="Эзләү"
               onChange={handle}
               className={cn('input')}
               type="text"
        />
      </div>
    );
  }
}

export default Search;
