import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'

class MovieDetails extends Component {
	render() {
		if (this.props.movie === undefined) {
			return <h1>loading</h1>
		}
		return (
			<section
				id="movie-details"
				style={{
					backgroundImage: `linear-gradient(0deg, rgb(2,2,2) 35%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg) `,
					backgroundSize: 'cover',
					backgroundPosition: 'center center no-repeat'
				}}>
				<div className="movie-container">
					<div className="trailer">
						<img src="https://image.tmdb.org/t/p/w154/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg" />
						<div className="watch-trailer">
							<img src="./img/play-button.svg" />
							<h5>Watch Trailer</h5>
						</div>
					</div>
					<div className="movie-info">
						<h1>Guardians of the Galaxy Vol 1</h1>
						<div className="details">
							<h2>****** 4.6/ 5</h2>
							<div className="runtime">
								<h2>Drama / Action -</h2>
								<h2>2h 4min 2005</h2>
								<h2>Release Date</h2>
							</div>
						</div>
						<p>
							Disaster strikes when a criminal mastermind reveals the identities
							of all active undercover agents in Britain. The secret service can
							now rely on only one man—Johnny English. Currently teaching at a
							minor prep school, Johnny springs back into action to find the
							mysterious hacker. For this mission to succeed, he’ll need all of
							his skills—what few he has—as the man with yesterday’s analogue
							methods faces off against tomorrow’s digital technology."
						</p>
						<div className="cast" />
					</div>
				</div>
			</section>
		)
	}
}

function mapStatetoProps(state) {
	return {
		movie: state.movies.selectedMovie
	}
}
export default connect(mapStatetoProps)(MovieDetails)
