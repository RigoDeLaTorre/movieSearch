import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {Link } from "react-router-dom";
import {
	fetchUpcomingtMovies,
	fetchPopularMovies,
	fetchGenreMovie,
	fetchMovieDetails
} from '../actions/movies'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'
import Movie from '../components/movies/movie.js'
import MovieDetails from '../components/movies/movieDetails.js'

class MovieTVListings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			popular: 2,
			upcoming: 1,
			movieIndex: 0
		}
		this.goNext = this.goNext.bind(this)
		this.goPrev = this.goPrev.bind(this)
		this.swiper = null
	}
	componentWillMount() {
		this.props.fetchGenreMovie()
		this.props.fetchPopularMovies(this.state.popular)
		this.props.fetchUpcomingtMovies()
	}

	// Navigation for movies/tv
	goNext() {
		if (this.swiper) this.swiper.slideNext()
	}
	// Navigation for movies/tv
	goPrev() {
		if (this.swiper) this.swiper.slidePrev()
	}

	// compares genre ids to the genre list in state and returns the name associated.
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

	// Renders a movie for each upcmoming movie in state.
	upcomingMovie = () => {
		return this.props.upcoming.map(movie => {
			return (
				<Movie
					key={movie.id}
					id={movie.id}
					img={movie.poster_path}
					title={movie.title}
					genre={this.filterGenre(movie.genre_ids)}
					selectedItem={this.selectedItem}
				/>
			)
		})
	}
	/* Renders a movie for each popular movie in state.  */
	popularMovie = () => {
		return this.props.popular.map(movie => {
			return (
				<Movie
					key={movie.id}
					img={movie.poster_path}
					title={movie.title}
					genre={this.filterGenre(movie.genre_ids)}
				/>
			)
		})
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

	// Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

	selectedItem = id => {
		console.log(id)
		this.props.fetchMovieDetails(id)
	}
	render() {
		const params = {
			setWrapperSize: true,
			init: true,
			slidesPerView: 7,
			loop: true,
			spaceBetween: 15,
			observer: true,
			direction: 'horizontal',
			pagination: {
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1145: { slidesPerView: 5 },
				699: { slidesPerView: 3 }
			}
		}

		if (!this.props.upcoming) {
			return (
				<div className={!this.props.upcoming ? 'loading-screen' : 'gone'}>
					Loading
				</div>
			)
		}

		return (
			<section className="home-page">

			 
				<div className="section-title-header">
					<h1>Movies</h1>
				</div>
				<div className="title-sub-header">
					<h1>Upcoming</h1>
				</div>
				<Swiper {...params} >
					{this.upcomingMovie()}
				</Swiper>
				<div className="title-sub-header">
					<h1>Popular</h1>
				</div>
				<Swiper {...params}>
					{this.popularMovie()}
				</Swiper>
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
)(MovieTVListings)
