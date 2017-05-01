import React from 'react';
import './Base.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classNames from 'helpers/classNames';
import styles from './App.css';

const cn = classNames(styles);


class App extends React.Component {
	componentDidMount() {
		(function (d, w, c) {
			(w[c] = w[c] || []).push(function() {
				try {
					w.yaCounter44493118 = new Ya.Metrika({
						id:44493118,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						trackHash:true
					});
				} catch(e) { }
			});

			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () { n.parentNode.insertBefore(s, n); };
			s.type = "text/javascript";
			s.async = true;
			s.src = "https://mc.yandex.ru/metrika/watch.js";

			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else { f(); }
		})(document, window, "yandex_metrika_callbacks");
	}
	render() {
		return (
			<div className={cn('wrap')}>
				<Header/>
					<div className={cn('content')}>
						{this.props.children}
					</div>
				<Footer/>
			</div>
		)
	}
}

export default App;
