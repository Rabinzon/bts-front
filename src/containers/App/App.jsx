import React from 'react';
import './Base.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classNames from 'helpers/classNames';
import styles from './App.css';

const cn = classNames(styles);


class App extends React.Component {
	render() {
		return (
			<div className={cn('wrap')}>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}

export default App;
