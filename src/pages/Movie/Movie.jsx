import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import R from 'ramda';

import {fetchOne} from '../../redux/modules/movie';
import { Header, Container, Dimmer, Loader, Button } from 'semantic-ui-react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import classNames from 'helpers/classNames';
import styles from './Movie.css';

const cn = classNames(styles);

const infoText = {
	year: 'Чыгу елы',
	genres: 'Жанр',
	time: 'Дәвамы',
	voice: 'Тавышлау',
	translator: 'Тәрҗемә',
	editing: 'Монтаж'
};

class Movie extends React.Component {

	componentWillMount() {
		const {location: {pathname}} = this.props;
		const id = pathname.replace('/movie/', '');
		if (global.VK) {
			global.VK.Widgets.Like('vk_like', {type: 'mini'}, id);
			global.VK.Widgets.Comments('vk_comments', {limit: 20, attach: "*"}, id);
			global.VK.Widgets.Group('vk_groups_mov', {mode: 3}, 103021137);
		}
	}

	componentDidMount() {
		const {location: {pathname}, fetchOne} = this.props;
		const id = pathname.replace('/movie/', '');
		fetchOne(id);
	}

	componentWillUnmount() {
		if (global.document) {
			const video = global.document.querySelector('video');
			video.pause();
			video.preload = 'none';
			video.parentNode.innerHTML = '';
		}
	}

	renderInfoField = (value, key) => {
		if (!value) {
			return null;
		}
		return (
			<div className={cn('field')} key={key}>
				<span className={cn('fieldName')}>
					{infoText[key]}:
				</span>
				<span>{key === 'time' ? value + ' мин' : value}.</span>
			</div>
		)
	}

	render() {
		const {movie: current} = this.props;
		const infoFields = R.pipe(
			R.pickBy((val, key) => infoText[key]),
			R.mapObjIndexed(this.renderInfoField),
			R.values
		)(current);

		return (
			<Container>
				{current ?
					<div className={cn('flex')}>
						<div className={cn('left')}>
							<img src={current.img} className={cn('img')} alt=""/>
							<div className={cn('info')}>
								{ infoFields }
								<br/>
								<Button
									as='a'
									href={current.trailer}
									color='green'
									icon='video'
									content='трейлер'
								/>
								<Button as='a' href={current.video} title='скачать' icon='download'></Button>
								<br/>
								<br/>
								<div id="vk_groups_mov"></div>
							</div>
						</div>
						<div className={cn('right')}>
							<Header as='h1'>{current.title}</Header>
							<div className={cn('text')} dangerouslySetInnerHTML={{__html: current.text.replace(/\n/g, '<br/> <br/>')}}></div>
							<div className={cn('video')}>
								<video
									preload='none'
									controls
									poster="/static/assets/bts.jpg">
									<source src={current.video} />
								</video>
							</div>
							<div className="vk-wibgets">
								<div className="save-vk" dangerouslySetInnerHTML={{__html: global.VK.Share.button(this.props.location.url, {type: 'button'})}}></div>
								<div id="vk_like"></div>
								<iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82&default-sum=100&button-text=13&any-card-payment-type=on&button-size=s&button-color=orange&successURL=&quickpay=small&account=410014304147436&" width="127" height="25" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
							</div>
							<br/>
							<br/>
							<div id="vk_comments"></div>
						</div>
					</div>
					: <Dimmer active>
						<Loader />
					</Dimmer>}
			</Container>
		)
	}
}

export default connect(
	({movie}) => ({...movie}),
	dispatch => bindActionCreators({fetchOne}, dispatch))
(Movie);
