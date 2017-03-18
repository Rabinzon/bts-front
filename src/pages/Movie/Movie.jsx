import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getById} from '../../redux/modules/movies';
import Container from '../../components/Container';

import styles from './Movie.css';

class Movie extends React.Component {
	search = ({currentTarget: {value}}) => {
		this.props.search(value);
	}

	componentDidMount() {
		const {location: {pathname}, getById} = this.props;
		const id = pathname.replace('/movie/', '');
		getById(id);
	}

	render() {
		const {current} = this.props;
		return (
			<div className={styles.wrap}>
				<div className={styles.content}>
					<Container>
						{current ?
						<div className={styles.flex}>
							<div className={styles.left}>
								<img src={current.Img} className={styles.img} alt=""/>
								<div className={styles.info}>
									<div className={styles.field}>
										<span className={styles.fieldName}>Чыгу елы:</span>
										<span>{current.Year}</span>
									</div>
									<div className={styles.field}>
										<span className={styles.fieldName}>Жанр:</span>
										<span>{current.Genres}</span>
									</div>
									<div className={styles.field}>
										<span className={styles.fieldName}>Дәвамы:</span>
										<span>{current.Time} мин.</span>
									</div>
								</div>
							</div>
							<div className={styles.right}>
								<div className={styles.title}>{current.Title}</div>
								<div className={styles.text} dangerouslySetInnerHTML={{__html: current.Text.replace(/\n/g, '<br/> <br/>')}}></div>
								<div className={styles.video}>
									<video controls src={current.Video} poster="https://pp.userapi.com/c836234/v836234535/1eb39/izNT3hEXIpA.jpg"></video>
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
	({movies}) => ({...movies}),
	dispatch => bindActionCreators({getById}, dispatch))
(Movie);
