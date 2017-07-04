import React from 'react';
import classNames from 'helpers/classNames';
import styles from './Search.css';
import { Input } from 'semantic-ui-react';

const cn = classNames(styles);

class Search extends React.Component {
  render() {
    const {handle} = this.props;
    return (
		<Input
			action={{ icon: 'search' }}
			placeholder='Эзләү...'
			onChange={handle}
		/>
    );
  }
}

export default Search;
