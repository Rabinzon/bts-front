import React, { Component } from 'react'
import { Link } from 'react-router';
import { Menu, Container } from 'semantic-ui-react'
import Isvg from 'react-inlinesvg';
import CONFIG from 'app-config';
import microphone from '../../static/assets/microphone.svg';
import vk from '../../static/assets/vk.svg';
import youtube from '../../static/assets/youtube.svg';
import styles from './Header.css';
import classNames from '../../helpers/classNames';

const cn = classNames(styles);

export default class MenuExampleInverted extends Component {
	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu inverted fixed='top'>
				<Container>
					<Menu.Item as={Link} to='/'>
						<Isvg className={cn('icon')} src={microphone}></Isvg>
						Безнең тәҗрибә
					</Menu.Item>
					<Menu.Item className={cn('hidden')} as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Фильмнар</Menu.Item>
					<Menu.Item as={Link} to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick}> Безнең хакта </Menu.Item>
					<div className={cn('social')}>
						<a className={cn('socialLink')} href={CONFIG.youtubeLink}>
							<Isvg className={cn('youtube')} src={youtube}></Isvg>
						</a>
						<a className={cn('socialLink')} href={CONFIG.vkLink}>
							<Isvg className={cn('vk')} src={vk}></Isvg>
						</a>
					</div>
				</Container>
			</Menu>
		)
	}
}
