import React from 'react';
import classNames from 'helpers/classNames';
import styles from './Container.css';

const cn = classNames(styles);

class Container extends React.Component {
	render() {
		return (
			<div className={cn('container', this.props.theme)}>
				{this.props.children}
			</div>
		)
	}
}

export default Container;
