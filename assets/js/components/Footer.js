import React from 'react'
import { Link } from 'react-router-dom'

const Footer = props => {
	return (
		<section id="footer">
			<h5>
				Copyright<span>&copy;</span>2018
			</h5>
			<h4>
				Code & Design by{' '}
				<a href="http://www.rigodlt.com/" target="_blank">
					Rigo De La Torre
				</a>
			</h4>
			<div className="tmdb-logo">
				<img src="./img/tmdblogo.png" />
				<p>
					This product uses the TMDb API but is not endorsed or certified by
					TMDb.
				</p>
			</div>
		</section>
	)
}

export default Footer
