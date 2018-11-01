import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import { fetchMovieDetails } from '../actions/movies'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'
import Movie from '../components/movies/movie.js'

class PopularMovies extends Component {
	constructor(props) {
		super(props)
		this.goNext = this.goNext.bind(this)
		this.goPrev = this.goPrev.bind(this)
		this.swiper = null
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
				{genre[0]} {genre[1] ? '/' + genre[1] : ''}
			</h2>
		)
	}

	// Renders a movie for each upcmoming movie in state.
	popularMovie = () => {
		return this.props.popular.map(movie => {
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

	// Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

	selectedItem = id => {
		console.log(id)
		this.props.fetchMovieDetails(id)
		console.log(this.props)
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

		if (!this.props.popular) {
			return (
				<div className={!this.props.popular ? 'loading-screen' : 'gone'}>
					Loading poplar movies
				</div>
			)
		}

		return (
			<section className="movie-selections">
				<div className="title-sub-header">
					<h2>Popular Movies</h2>
				</div>
				<Swiper {...params}>{this.popularMovie()}</Swiper>
			</section>
		)
	}
}

function mapStatetoProps(state) {
	return {
		popular: state.movies.popularMovies.results,
		genres: state.movies.genreMovies.genres
	}
}
export default connect(
	mapStatetoProps,
	{
		fetchMovieDetails
	}
)(PopularMovies)
