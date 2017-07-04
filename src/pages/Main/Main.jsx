import React from 'react';
import { connect } from 'react-redux';
import { Container, Header,  Dimmer, Loader } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {fetch, search, filterByTag} from '../../redux/modules/movies';
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
			<div>
				<div className={cn('toolbar')}>
					<Container text>
						<Tabs handler={filterByTag} list={list}/>
					</Container>
					<div className={cn('search')}>

					</div>
				</div>
				<Container text>
					<div className={cn('search-bar')}>
						<Header size='large'>{movies && movies.length} фильм</Header>
						<Search handle={this.search} />
					</div>
					<div className={cn('showWrapper')}>
						{fetched ?
							movies.map((item, i) => <Show data={item} key={i} />)
							: <Dimmer active>
								<Loader />
							</Dimmer>
						}
					</div>
				</Container>
			</div>
		)
	}
}

export default connect(
	({movies}) => ({...movies}),
	dispatch => bindActionCreators({fetch, search, filterByTag}, dispatch))
(Main);
