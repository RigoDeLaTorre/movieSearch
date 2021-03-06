import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import { fetchMovieDetails } from '../actions/selected'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'
import VideoForCarousel from '../components/VideoForCarousel.js'

export default class Carousel extends Component {
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
	renderVideos = () => {
		console.log(this.props.movie)
		return this.props.movie.map(movie => {
			return (
				<VideoForCarousel
					key={movie.id}
					id={movie.id}
					img={movie.poster_path}
					title={movie.title ? movie.title : movie.name}
					genre={this.filterGenre(movie.genre_ids)}
					selectedItem={this.props.selectedItem}
				/>
			)
		})
	}

	// Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

	selectedItem = id => {
		let url = this.props.match.url
		if (url === '/tvdetails' || url === 'tv/') {
			this.props.fetchSearchDetails(id, 'tv')
			this.props.history.push('/tvdetails')
		} else {
			this.props.fetchSearchDetails(id, 'movie')
			this.props.history.push('/moviedetails')
		}
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

		if (!this.props.movie) {
			return (
				<div className={!this.props.movie ? 'loading-screen' : 'gone'}>
					Loading
				</div>
			)
		}

		return (
			<section id="carousel">
				<div className="title-sub-header">
					<h2>{this.props.title}</h2>
				</div>
				<Swiper {...params}>{this.renderVideos()}</Swiper>
			</section>
		)
	}
}
