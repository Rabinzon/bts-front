import React from 'react';
import classNames from 'helpers/classNames';
import styles from './Button.css';

const cn = classNames(styles);

class Button extends React.Component {
	render() {
		return (
			<button
				onClick={this.props.handler}
				className={cn('button')}
			>
				{this.props.text}
			</button>
		)
	}
}

export default Button;
