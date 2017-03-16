import React, {Component, PropTypes} from 'react';

export default class Show extends Component {
	render() {
		const {data} = this.props; // eslint-disable-line no-shadow
		const styles = require('./Show.css');
		return (
			<a href={`${data.Href}?id=${data.ID}`}>
				<div className={styles.show}>
					<img className={styles.img} src={data.Img}/>
					<p className={styles.name}>{data.Title}</p>
					<div className={styles.info}>
						<div className={styles.title}>{data.Title}</div>
						<p className={styles.text}>{data.Text}</p>
					</div>
				</div>
			</a>
		);
	}
}
