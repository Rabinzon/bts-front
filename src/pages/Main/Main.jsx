import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetch, search, filterByTag} from '../../redux/modules/movies';
import Container from '../../components/Container';
import Search from '../../components/Search';
import Show from '../../components/Show';
import Tabs from '../../components/Tabs';

import classNames from 'helpers/classNames';
import styles from './Main.css';

const cn = classNames(styles);

const list = [
	{text: 'Бөтенесе', val: 'all'},
	{text: 'Фильмнар', val: 'movie'},
	{text: 'Мультфильмнар', val: 'cartoon'},
	{text: 'Док. фильмнар', val: 'doc'}
];

class Main extends React.Component {
	search = ({currentTarget: {value}}) => {
		this.props.search(value);
	}

	componentDidMount() {
		this.props.fetch();
	}

	render() {
		const {movies, fetched, filterByTag} = this.props;
		return (
			<div className={cn('wrap')}>
				<div className={cn('content')}>
					<Container>
						<div className={cn('toolbar')}>
							<div className={cn('left')}>
								<div className={cn('count')}>фильм</div>
								<Tabs handler={filterByTag} list={list}/>
							</div>
							<div className={cn('search')}>
								<Search handle={this.search} />
							</div>
						</div>
						<div className={cn('showWrapper')}>
							{fetched ?
								movies.map((item, i) => <Show data={item} key={i} />)
								: 'Loading...'
							}
						</div>
					</Container>
				</div>
			</div>
		)
	}
}

export default connect(
	({movies}) => ({...movies}),
	dispatch => bindActionCreators({fetch, search, filterByTag}, dispatch))
(Main);
