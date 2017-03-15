import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Base.css';
import * as All from '../../redux/modules/add';
import Button from '../../components/Button';
import styles from './App.css';


class App extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<div>{this.props.counter}</div>
				<Button
					handler={this.props.add}
				    text='push'
				/>
			</div>
		)
	}
}

export default connect(
	({counter}) => ({counter}),
	dispatch => bindActionCreators(All, dispatch))
(App);
