import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetch, search} from '../../redux/modules/movies';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Show from '../../components/Show';
import Tabs from '../../components/Tabs';

import styles from './Movie.css';
const data = {
	ID: "58ab56b1e17838742ffeb0b6",
	Title: "Өскә",
	Text: "78 яшьлек мыгырдык Карл Фредриксен тормышы аны урап узып бара дип уйлый. Зур хыялын һәм мәрхүм хатынына биргән вәгъдәсен үтәр өчен, ул, өенә меңләгән шарлар бәйләп, Көньяк Америкага маҗаралар эзләргә очып китәргә уйлый. Ярты миль да узалмый, бер әйбер ачыклана: карт ялгыш кына кечкенә бертуктамый сөйләүче шат күңелле 8 яшьлек Расселны да үзе белән эләктереп киткән..",
	Img: "http://89.223.31.219:4000/up.jpg",
	Href: "/movies",
	Video: "http://89.223.31.219:4000/Up_cartoon.mp4",
	Time: "101",
	Year: "2009",
	Genres: "балаларга, мультфильм, маҗаралар, гайләви"
}
const list = ['барсыда', 'кино', 'мультфильм', 'сериал'];

class Movie extends React.Component {
	search = ({currentTarget: {value}}) => {
		this.props.search(value);
	}
	
	componentDidMount() {
		this.props.fetch();
	}
	
	render() {
		const {movies, fetched} = this.props;
		return (
			<div className={styles.wrap}>
				<Header />
				<div className={styles.content}>
					<Container>
						<div className={styles.flex}>
							<div className={styles.left}>
								<img src={data.Img} className={styles.img} alt=""/>
								<div className={styles.info}>
									<div className={styles.field}>
										<span className={styles.fieldName}>Чыгу елы:</span>
										<span>{data.Year}</span>
									</div>
									<div className={styles.field}>
										<span className={styles.fieldName}>Жанр:</span>
										<span>{data.Genres}</span>
									</div>
									<div className={styles.field}>
										<span className={styles.fieldName}>Дәвамы:</span>
										<span>{data.Time} мин.</span>
									</div>
								</div>
							</div>
							<div className={styles.right}>
								<div className={styles.title}>{data.Title}</div>
								<div className={styles.text} dangerouslySetInnerHTML={{__html: data.Text.replace(/\n/g, '<br/> <br/>')}}></div>
								<div className={styles.video}>
									<video controls src={data.Video} poster="https://pp.userapi.com/c836234/v836234535/1eb39/izNT3hEXIpA.jpg"></video>
								</div>
								<br/>
								<div id="vk_like"></div>
								<br/>
								<div id="vk_comments"></div>
							</div>
						</div>
					</Container>
				</div>
				<Footer />
			</div>
		)
	}
}

export default connect(
	({movies}) => ({...movies}),
	dispatch => bindActionCreators({fetch, search}, dispatch))
(Movie);
