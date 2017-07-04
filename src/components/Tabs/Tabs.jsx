import React from 'react';
import { Menu } from 'semantic-ui-react'

import classNames from 'helpers/classNames';
import styles from './Tabs.css';

const cn = classNames(styles);

class Tabs extends React.Component {
	state = {
		activeItem: 'all'
	}

	handleItemClick = activeItem => () => {
		this.props.handler(activeItem);
		this.setState({activeItem});
	}

	renderLinks = ({activeItem}) => ({text, val}, i) =>
		<Menu.Item
			key={i}
			active={activeItem === val}
			onClick={this.handleItemClick(val)}
			className={cn('item')}
			name={val}>
			{text}
		</Menu.Item>;

	render() {
		const {list} = this.props;
		return (
			<div className={cn('tabs')}>
				<Menu secondary>
					{list.map(this.renderLinks(this.state))}
				</Menu>
			</div>
		);
	}
}

export default Tabs;
