import React from 'react';
import Container from '../Container';
import classNames from 'helpers/classNames';
import styles from './Footer.css';

const cn = classNames(styles);

class Footer extends React.Component {
	render() {
		return (
			<footer className={cn('footer')}>
				<Container>
					<div className={cn('content')}>Безнең тәҗрибә 2015...2017.</div>
				</Container>
			</footer>
		)
	}
}

export default Footer;
