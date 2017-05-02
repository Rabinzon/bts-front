import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';
import classNames from 'helpers/classNames';
import playIcon  from '../../static/assets/play.svg';
import styles from './Show.css';

const cn = classNames(styles);

export default class Show extends Component {
	render() {
		const {
			data: {
				name, img, title
			}
		} = this.props;
		return (
			<Link to={'/movie/'+ name}>
				<div className={cn('show')}>
					<img className={cn('img')} src={img}/>
					<p className={cn('name')}>{title}</p>
					<div className={cn('info')}>
						<Isvg className={cn('play')} src={playIcon}></Isvg>
					</div>
				</div>
			</Link>
		);
	}
}
