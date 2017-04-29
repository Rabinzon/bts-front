import React from 'react';
import Container from '../../components/Container';

import classNames from 'helpers/classNames';
import styles from './Sponsors.css';

const cn = classNames(styles);


class Sponsors extends React.Component {
	render() {
		return (
			<div className={cn('wrap')}>
				<Container>
					<div className={cn('content')}>
						<br/>
						<br/>
						<h1 className={cn('title')}>Безнең спонсоралар</h1>
						<p>
							Сайтыбызны эшләтеп җибәрергә һәм хәзер дә төзек килеш
							<br/>
							карап торырга финанс ярдәм күрсәтүчеләргә зур рәхмәтебезне белдерәбез!
						</p>
						<br/>
						<p className={cn('person')}>
							<strong>Рөстәм Закиров</strong>
						</p>
						<p className={cn('person')}>
							<strong>Ренат Х.</strong>
						</p>
						<p className={cn('person')}>
							<strong>Айдар Ш.</strong>
						</p>
						<p className={cn('person')}>
							<strong>Айнур Кәрим</strong>
						</p>
					</div>
				</Container>
			</div>
		)
	}
}

export default Sponsors;
