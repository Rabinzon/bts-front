import React from 'react';
import Isvg from 'react-inlinesvg';
import Container from '../Container';
import microphone from '../../assets/microphone.svg';
import vk from '../../assets/vk.svg';
import youtube from '../../assets/youtube.svg';
import { Link } from 'react-router';
import classNames from 'helpers/classNames';
import CONFIG from 'app-config';
import styles from './Header.css';

const cn = classNames(styles);

class Header extends React.Component {
	render() {
		return (
			<header className={cn('wrap')}>
				<div className={cn('header')}>
					<Container>
						<div className={cn('content')}>
							<Isvg className={cn('icon')} src={microphone}></Isvg>
							<a href='/' className={cn('logo')}>Безнең тәҗрибә</a>
							<menu className={cn('menu')}>
								<Link to='/' className={cn('link', 'active')}>Фильмнар</Link>
								<Link to='/' className={cn('link')}>Безнең хакта</Link>
							</menu>
							<div className={cn('social')}>
								<a className={cn('socialLink')} href={CONFIG.youtubeLink}>
									<Isvg className={cn('youtube')} src={youtube}></Isvg>
								</a>
								<a className={cn('socialLink')} href={CONFIG.vkLink}>
									<Isvg className={cn('vk')} src={vk}></Isvg>
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
