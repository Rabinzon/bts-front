import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchOne} from '../../redux/modules/movie';
import Container from '../../components/Container';

import classNames from 'helpers/classNames';
import styles from './Movie.css';

const cn = classNames(styles);


class Movie extends React.Component {

	componentDidMount() {
		const {location: {pathname}, fetchOne} = this.props;
		const id = pathname.replace('/movie/', '');
		fetchOne(id);
	}

	render() {
		const {movie: current} = this.props;
		return (
			<div className={cn('wrap')}>
				<div className={cn('content')}>
					<Container>
						{current ?
						<div className={cn('flex')}>
							<div className={cn('left')}>
								<img src={current.Img} className={cn('img')} alt=""/>
								<div className={cn('info')}>
									<div className={cn('field')}>
										<span className={cn('fieldName')}>Чыгу елы:</span>
										<span>{current.Year}</span>
									</div>
									<div className={cn('field')}>
										<span className={cn('fieldName')}>Жанр:</span>
										<span>{current.Genres}</span>
									</div>
									<div className={cn('field')}>
										<span className={cn('fieldName')}>Дәвамы:</span>
										<span>{current.Time} мин.</span>
									</div>
								</div>
							</div>
							<div className={cn('right')}>
								<div className={cn('title')}>{current.Title}</div>
								<div className={cn('text')} dangerouslySetInnerHTML={{__html: current.Text.replace(/\n/g, '<br/> <br/>')}}></div>
								<div className={cn('video')}>
									<video controls src={current.Video} poster="/static/assets/bts.jpg"></video>
								</div>
								<br/>
								<div id="vk_like"></div>
								<br/>
								<div id="vk_comments"></div>
							</div>
						</div>
						: 'Loading...'}
					</Container>
				</div>
			</div>
		)
	}
}

export default connect(
	({movie}) => ({...movie}),
	dispatch => bindActionCreators({fetchOne}, dispatch))
(Movie);
