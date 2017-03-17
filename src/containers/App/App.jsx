import React from 'react';
import './Base.css';
import Movie from '../../containers/Movie';
import styles from './App.css';


class App extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<Movie />
			</div>
		)
	}
}

export default App;
