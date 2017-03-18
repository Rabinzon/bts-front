import React from 'react';
import './Base.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './App.css';

class App extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}

export default App;
