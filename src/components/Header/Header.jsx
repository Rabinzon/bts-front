import React from 'react';
import Container from '../Container';
import styles from './Header.css';


class Header extends React.Component {
	render() {
		return (
			<header className={styles.wrap}>
				<div className={styles.header}>
					<Container>
						<div className={styles.content}>
							<a href='/' className={styles.logo}>Безнең тәҗрибә</a>
							<menu className={styles.menu}>
								<a href='/' className={[styles.link, styles.active].join(' ')}>Фильмнар</a>
								<a href='/' className={styles.link}>Безнең хакта</a>
							</menu>
						</div>
					</Container>
				</div>
			</header>
			
		)
	}
}

export default Header;
