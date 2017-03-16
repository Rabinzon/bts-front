import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Base.css';
import * as All from '../../redux/modules/add';
import Container from '../../components/Container';
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

export default connect(
	({counter}) => ({counter}),
	dispatch => bindActionCreators(All, dispatch))
(App);
