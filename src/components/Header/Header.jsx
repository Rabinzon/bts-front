import React from 'react';
import Isvg from 'react-inlinesvg';
import Container from '../Container';
import microphone from '../../assets/microphone.svg';
import vk from '../../assets/vk.svg';
import youtube from '../../assets/youtube.svg';

import styles from './Header.css';


class Header extends React.Component {
	render() {
		return (
			<header className={styles.wrap}>
				<div className={styles.header}>
					<Container>
						<div className={styles.content}>
							<Isvg className={styles.icon} src={microphone}></Isvg>
							<a href='/' className={styles.logo}>Безнең тәҗрибә</a>
							<menu className={styles.menu}>
								<a href='/' className={[styles.link, styles.active].join(' ')}>Фильмнар</a>
								<a href='/' className={styles.link}>Безнең хакта</a>
							</menu>
							<div className={styles.social}>
								<a className={styles.socialLink} href='https://www.youtube.com/channel/UCDCaB11-PTI3dZyTBG7CylA'>
									<Isvg className={styles.youtube} src={youtube}></Isvg>
								</a>
								<a className={styles.socialLink} href='https://vk.com/beztejribe'>
									<Isvg className={styles.vk} src={vk}></Isvg>
								</a>
							</div>
						</div>
					</Container>
				</div>
			</header>
			
		)
	}
}

export default Header;
