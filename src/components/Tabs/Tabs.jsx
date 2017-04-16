import React from 'react';
import classNames from 'helpers/classNames';
import styles from './Tabs.css';

const cn = classNames(styles);

class Tabs extends React.Component {
	state = {
		active: 'all'
	}

	onClick = active => () => {
		this.props.handler(active);
		this.setState({active});
	}

	renderLinks = ({active}) => ({text, val}, i) =>
		<a key={i}
			onClick={this.onClick(val)}
			className={cn({
				active: val === active,
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
