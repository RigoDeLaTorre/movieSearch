import React from 'react'

const Movie = ({ id, img, title, genre, selectedItem }) => {
	return (
		<div className="swiper-slide" onClick={() => selectedItem(id)}>
			<div className="img">
				<img src={`https://image.tmdb.org/t/p/w500${img}`} />
			</div>
			<div className="info">
				<h1>{title}</h1>
				{genre}
			</div>
		</div>
	)
}

export default Movie
