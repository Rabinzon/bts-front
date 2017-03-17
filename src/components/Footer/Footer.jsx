import React from 'react';
import Container from '../Container';
import styles from './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				<Container>
					<div className={styles.content}>Безнең тәҗрибә 2015...2017.</div>
				</Container>
			</footer>
		)
	}
}

export default Footer;
