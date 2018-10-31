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
					backgroundImage: `linear-gradient(0deg, rgb(2,2,2) 35%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original${this.props.movie.backdrop_path}) `,
					backgroundSize: 'cover',
					backgroundPosition: 'center center no-repeat'
				}}>
				<div className="movie-container">

					<iframe src={`http://www.youtube.com/embed/${this.props.movie.results ? this.props.movie.results[0].key : ''}`}
        allowFullScreen="allowFullScreen"
        mozallowFullScreen="mozallowFullScreen"
        msallowFullScreen="msallowFullScreen"
        oallowFullScreen="oallowFullScreen"
        webkitallowFullScreen="webkitallowFullScreen"
				frameBorder="0"
				width="420"
				height ="320"></iframe>
					<div className="movie-info">
						<h1>{this.props.movie.title}</h1>
						<div className="details">
							<div className="rating">
								<h2>Rating {this.props.movie.vote_average}</h2>
								<span className={`fa fa-star ${this.props.movie.vote_average >0? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >1? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >2? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >3? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >4? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >5? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >6? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >7? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >8? 'checked' : ''} `}></span>
								<span className={`fa fa-star ${this.props.movie.vote_average >9? 'checked' : ''} `}></span>
							</div>


							<div className="runtime">
								<h2>{this.props.movie.genres ? this.props.movie.genres[0].name : ''}</h2>
								<h2>{this.props.movie.runtime} min</h2>
								<h2>{this.props.movie.release_date}</h2>
							</div>
						</div>
						<p>{this.props.movie.overview}</p>
						<div className="cast"></div>
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
