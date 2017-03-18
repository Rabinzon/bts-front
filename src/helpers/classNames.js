import classNames from 'classnames/bind';

export default (styles) => {
	const cx = classNames.bind(styles);
	
	return (...classes) => {
		const splitted = classes.map(className =>
			typeof className === 'string' ? className.split(' ') : className
		);
		
		return cx(splitted);
	};
};
