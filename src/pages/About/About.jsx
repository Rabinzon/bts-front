import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import classNames from 'helpers/classNames';
import styles from './About.css';

const cn = classNames(styles);


class About extends React.Component {
	render() {
		console.log();
		return (
			<Container text main>
				<br/>
				<Header as='h1'>Безнең хакта</Header>
				<strong>"Безнең тәҗрибә"</strong> — коммерциясе булмаган чит телле видеоларны татарчага тәрҗемә итеп тавышлау (озвучка),
				<br/> субтитрлар ясау проекты.
				<br/>
				<br/>
				Проектның төп юнәлеше-татарча фильмнар, мультфильмнар базасы булдыру, татар яшьләре арасында татар телен популярлаштыру.
				Бар ителү вакыты: 26нчы сентябрь 2015 ел.
				<br/>
				<Header as='h2'>Безнең спонсоралар</Header>
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
				<br/>
				{
					global.window && global.innerWidth > 520 &&
					<iframe frameBorder="0" allowTransparency="true" scrolling="no" src="https://money.yandex.ru/embed/donate.xml?account=410014304147436&quickpay=donate&payment-type-choice=on&default-sum=100&targets=%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5+%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&project-name=%D0%91%D0%B5%D0%B7%D0%BD%D0%B5%D2%A3+%D1%82%D3%99%D2%97%D1%80%D0%B8%D0%B1%D3%99&project-site=bts.tatar&button-text=05&successURL=" width="422" height="92"></iframe>

				}
			</Container>
		)
	}
}

export default About;
