import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import classNames from 'helpers/classNames';
import styles from './Show.css';

const cn = classNames(styles);

export default class Show extends Component {
	render() {
		const {
			data: {ID, Img, Title, Text}
		} = this.props;
		return (
			<Link to={'/movie/'+ ID}>
				<div className={cn('show')}>
					<img className={cn('img')} src={Img}/>
					<p className={cn('name')}>{Title}</p>
					<div className={cn('info')}>
						<div className={cn('title')}>{Title}</div>
						<p className={cn('text')}>{Text}</p>
					</div>
				</div>
			</Link>
		);
	}
}
