import React from 'react';
import classNames from 'helpers/classNames';
import styles from './Tabs.css';

const cn = classNames(styles);

class Tabs extends React.Component {
	state = {
		active: 0
	}

	onClick = active => () =>
		this.setState({active});

	renderLinks = ({active}) => (text, i) =>
		<a key={i}
			onClick={this.onClick(i)}
			className={cn({
				active: i === active,
				tab: true
			})}>
			{text}
		</a>;

	render() {
		const {list} = this.props;
		return (
			<div className={cn('tabs')}>
				{list.map(this.renderLinks(this.state))}
			</div>
		);
	}
}

export default Tabs;
