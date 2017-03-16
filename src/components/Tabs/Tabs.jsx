import React from 'react';
import styles from './Tabs.css';

class Tabs extends React.Component {
	render() {
		const {list} = this.props;
		
		return (
			<div className={styles.tabs}>
				{list.map((text, index) => <a href="/" className={index === 0 ? styles.active : styles.tab} key={index}>{text}</a>)}
			</div>
		);
	}
}

export default Tabs;
