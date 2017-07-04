import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

import classNames from 'helpers/classNames';
import styles from './Sponsors.css';

const cn = classNames(styles);


class Sponsors extends React.Component {
	render() {
		return (
			<Container text main>
				<br/>
				<Header as='h1'>Безнең спонсоралар</Header>
				<p>
					Сайтыбызны эшләтеп җибәрергә һәм хәзер дә төзек килеш
					<br/>
					карап торырга финанс ярдәм күрсәтүчеләргә зур рәхмәтебезне белдерәбез!
				</p>
				<List bulleted>
					<List.Item>Рөстәм Закиров</List.Item>
					<List.Item>Айдар Шайхин</List.Item>
					<List.Item>Айнур Кәрим</List.Item>
				</List>
			</Container>
		)
	}
}

export default Sponsors;
