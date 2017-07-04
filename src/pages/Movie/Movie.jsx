import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchOne} from '../../redux/modules/movie';
import { Header, Container, Dimmer, Loader, Button } from 'semantic-ui-react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import classNames from 'helpers/classNames';
import styles from './Movie.css';

const cn = classNames(styles);


class Movie extends React.Component {

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

	render() {
		const {movie: current} = this.props;
		return (
			<Container>
				{current ?
					<div className={cn('flex')}>
						<div className={cn('left')}>
							<img src={current.img} className={cn('img')} alt=""/>
							<div className={cn('info')}>
								<div className={cn('field')}>
									<span className={cn('fieldName')}>Чыгу елы:</span>
									<span>{current.year}.</span>
								</div>
								<div className={cn('field')}>
									<span className={cn('fieldName')}>Жанр:</span>
									<span>{current.genres}.</span>
								</div>
								<div className={cn('field')}>
									<span className={cn('fieldName')}>Дәвамы:</span>
									<span>{current.time} мин.</span>
								</div>
								<div className={cn('field')}>
									<span className={cn('fieldName')}>Тавышлау:</span>
									<span>{current.voice}.</span>
								</div>
								<br/>
								<Button
									as='a'
									href={current.trailer}
									color='green'
									icon='video'
									content='трейлер'
								/>
								<Button as='a' href={current.video} title='скачать' icon='download'></Button>

							</div>
						</div>
						<div className={cn('right')}>
							<Header as='h1'>{current.title}</Header>
							<div className={cn('text')} dangerouslySetInnerHTML={{__html: current.text.replace(/\n/g, '<br/> <br/>')}}></div>
							<div className={cn('video')}>
								<Video
									preload='none'
									poster="/static/assets/bts.jpg">
									<source src={current.video} />
								</Video>
							</div>
							<br/>
							<div id="vk_like"></div>
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
