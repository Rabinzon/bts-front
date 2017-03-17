import React from 'react';
import styles from './Tabs.css';

class Tabs extends React.Component {
	state = {
		active: 0
	}
	
	onClick = active => () => {
		this.setState({active})
	}

	render() {
		const {list} = this.props;
		const {active} = this.state;
		
		return (
			<div className={styles.tabs}>
				{list.map((text, index) => <a onClick={this.onClick(index)} className={index === active ? styles.active : styles.tab} key={index}>{text}</a>)}
			</div>
		);
	}
}

export default Tabs;
