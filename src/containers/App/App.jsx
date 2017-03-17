import React from 'react';
import './Base.css';
import Main from '../../containers/Main';
import styles from './App.css';


class App extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<Main />
			</div>
		)
	}
}

export default App;
