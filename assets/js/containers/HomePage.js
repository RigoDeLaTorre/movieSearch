import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import {
	fetchUpcomingtMovies,
	fetchPopularMovies,
	fetchGenreMovie,
	fetchMovieDetails
} from '../actions/movies'
import { connect } from 'react-redux'

import UpcomingMovies from './upcomingMovies.js'
import PopularMovies from './popularMovies.js'
import HomeMainPic from './homemainpic.js'

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			popular: 2,
			upcoming: 1,
			movieIndex: 0
		}
	}
	componentWillMount() {
		this.props.fetchGenreMovie()
		this.props.fetchPopularMovies(this.state.popular)
		this.props.fetchUpcomingtMovies()
	}

	filterGenre = id => {
		let genre = this.props.genres
			.filter(item => item.id === id[0] || item.id == id[1])
			.map(item => item.name)
		return (
			<h2>
				{genre[0]} / {genre[1] ? genre[1] : ''}
			</h2>
		)
	}

	//TESTING THIS, not yet complete.....eventually I want to fetch a new page when the user swipes to the end of page 1.
	handlePopularPage = () => {
		this.setState(
			prevState => ({
				popular: prevState.popular + 1
			}),
			() => this.props.fetchPopularMovies(this.state.popular)
		)
	}
	selectedItem = id => {
		console.log(id)
		this.props.fetchMovieDetails(id)
		this.props.history.push('/moviedetails')
	}

	render() {
		if (!this.props.upcoming) {
			return (
				<div className={!this.props.upcoming ? 'loading-screen' : 'gone'}>
					Loading
				</div>
			)
		}

		return (
			<section className="home-page">
				<div className="main-image">
					<HomeMainPic selectedItem={this.selectedItem} />
					<div className="main-details">
						<h1>{this.props.upcoming[this.state.movieIndex].title}</h1>
						{this.filterGenre(
							this.props.upcoming[this.state.movieIndex].genre_ids
						)}
						<h3>Rating ***** </h3>
					</div>
				</div>

				<div className="video-container">
					<div className="section-title-header">
						<h1>Movies</h1>
					</div>
					<UpcomingMovies selectedItem={this.selectedItem} />
					<PopularMovies />
				</div>
				<div className="section-title-header">
					<h1>TV Shows</h1>
				</div>
			</section>
		)
	}
}

function mapStatetoProps(state) {
	return {
		upcoming: state.movies.upComingMovies.results,
		popular: state.movies.popularMovies.results,
		genres: state.movies.genreMovies.genres
	}
}
export default connect(
	mapStatetoProps,
	{
		fetchUpcomingtMovies,
		fetchPopularMovies,
		fetchGenreMovie,
		fetchMovieDetails
	}
)(HomePage)
