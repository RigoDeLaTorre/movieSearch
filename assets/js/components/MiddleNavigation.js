import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

export default class MiddleNavigation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: ''
		}
	}

	handleChange = event => {
		this.setState({ searchTerm: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.fetchSearchAll(this.state.searchTerm)
		this.props.history.push('/searchResults')
	}

	render() {
		return (
			<section id="section-title-header">
				<div className="mid-navigation">
					<Link to="/">
						<h1
							style={
								this.props.page === 'movie'
									? { border: '1px solid orange' }
									: { border: '' }
							}>
							Movies
						</h1>
					</Link>
					<Link to="/tv">
						<h1
							style={
								this.props.page === 'tv'
									? { border: '1px solid orange' }
									: { border: '' }
							}>
							Tv Shows
						</h1>
					</Link>
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Search your favorite Movie, TV Show, or Actor"
							value={this.state.searchTerm}
							onChange={this.handleChange}
						/>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</section>
		)
	}
}
