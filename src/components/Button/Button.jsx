import React from 'react';
import styles from './Button.css';

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.handler} className={styles.button}>{this.props.text}</button>
		)
	}
}

export default Button;