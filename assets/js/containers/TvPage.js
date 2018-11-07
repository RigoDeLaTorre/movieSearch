import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import { fetchSearchDetails } from '../actions/selected'
import { fetchSearchAll } from '../actions/search'
import { connect } from 'react-redux'
import MainImageCarousel from './MainImageCarousel.js'
import MiddleNavigation from '../components/MiddleNavigation.js'
import LoadingComp from '../components/LoadingComp.js'
import Footer from '../components/Footer.js'
import Carousel from './carousel.js'

class TvPage extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		window.scrollTo(0, 0)
	}
	filterGenre = id => {
		if (!this.props.genres) {
			return <h2>' '</h2>
		}
		let genre = this.props.genres
			.filter(item => item.id === id[0] || item.id == id[1])
			.map(item => item.name)
		return (
			<h2>
				{genre[0]} / {genre[1] ? genre[1] : ''}
			</h2>
		)
	}

	selectedItem = id => {
		let url = this.props.match.url
		if (url === '/tvdetails' || url === '/tv') {
			this.props.fetchSearchDetails(id, 'tv')
			this.props.history.push('/tvdetails')
		} else {
			this.props.fetchSearchDetails(id, 'movie')
			this.props.history.push('/moviedetails')
		}
	}

	render() {
		return (
			<section className="home-page">
				<LoadingComp
					initial={this.props.popular == undefined ? 'loading' : ''}
				/>
				<Link to="/">
					<div className="logo">
						<img src="./img/logo.png" />
					</div>
				</Link>
				<div className="main-image">
					<MainImageCarousel
						selectedItem={this.selectedItem}
						data={this.props.popular}
						genres={this.props.genres}
						filterGenre={this.filterGenre}
						type={this.props.match.url}
					/>
				</div>

				<div className="video-container">
					<MiddleNavigation
						history={this.props.history}
						fetchSearchAll={this.props.fetchSearchAll}
						page="tv"
					/>
					<Carousel
						selectedItem={this.selectedItem}
						fetchSearchDetails={this.props.fetchSearchDetails}
						genres={this.props.genres}
						movie={this.props.popular}
						title="popular"
					/>
					<Carousel
						selectedItem={this.selectedItem}
						fetchSearchDetails={this.props.fetchSearchDetails}
						genres={this.props.genres}
						movie={this.props.toprated}
						title="top rated"
					/>
					<Carousel
						selectedItem={this.selectedItem}
						fetchSearchDetails={this.props.fetchSearchDetails}
						genres={this.props.genres}
						movie={this.props.airingtoday}
						title="airing today"
					/>
					<Carousel
						selectedItem={this.selectedItem}
						fetchSearchDetails={this.props.fetchSearchDetails}
						genres={this.props.genres}
						movie={this.props.thisweek}
						title="airing this week "
					/>
				</div>
				<Footer />
			</section>
		)
	}
}

function mapStatetoProps(state) {
	return {
		movie: state.selectedItem,
		popular: state.tv.popularTv.results,
		toprated: state.tv.topRatedTv.results,
		airingtoday: state.tv.airingTodayTv.results,
		thisweek: state.tv.airingThisWeekTv.results,
		genres: state.tv.genreTv.genres
	}
}
export default connect(
	mapStatetoProps,
	{
		fetchSearchDetails,
		fetchSearchAll
	}
)(TvPage)
