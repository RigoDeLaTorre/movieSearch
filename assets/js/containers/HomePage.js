import React, { Component } from 'react';
import ReactDom from 'react-dom'
import { fetchUpcomingtMovies, fetchPopularMovies, fetchGenreMovie } from '../actions/movies'
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
import Movie from '../components/movies/movie.js'
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popular:2,
      upcoming:1,
      movieIndex:0
    };
    this.goNext = this.goNext.bind(this)
   this.goPrev = this.goPrev.bind(this)
   this.swiper = null
  }
componentWillMount(){
  this.props.fetchGenreMovie()
  this.props.fetchPopularMovies(this.state.popular)
  this.props.fetchUpcomingtMovies()
}
goNext() {
  if (this.swiper) this.swiper.slideNext()
}

goPrev() {
  if (this.swiper) this.swiper.slidePrev()
}

// compares genre ids to the genre list in state and returns the name associated.
  filterGenre = (id) =>{
  let genre = this.props.genres.filter(item => item.id ===id[0] || item.id == id[1]).map(item=>item.name)
            return <h2>{genre[0]} / {genre[1] ? genre[1] : ''}</h2>
}

  // Renders a movie for each upcmoming movie in state.
  upcomingMovie =()=>{
    return this.props.upcoming.map((movie)=>{
      return <Movie
      key={movie.id}
      img ={movie.poster_path}
      title={movie.title}
      genre={this.filterGenre(movie.genre_ids)}
      />
    })
  }

  // Renders a movie for each popular movie in state.
      popularMovie =()=>{
      return this.props.popular.map((movie)=>{
        return <Movie
        key={movie.id}
        img ={movie.poster_path}
        title={movie.title}
        genre={this.filterGenre(movie.genre_ids)}
        />
      })
    }

    handlePopularPage =() =>{

      this.setState(prevState => ({
       popular: prevState.popular + 1,
     }), ()=> this.props.fetchPopularMovies(this.state.popular));
  }

//
movieIndex = ()=>{
console.log('clicked')
      let car=()=>{
      if(this.state.movieIndex<this.props.upcoming.length){
        console.log(this.props.upcoming[this.state.movieIndex].title)
        if(this.state.movieIndex==this.props.upcoming.length-1){
          this.setState({
            movieIndex:0
          })
        }else{
          this.setState(prevState => ({
           movieIndex: prevState.movieIndex + 1,
         }));
        }
        setTimeout(() => {
          console.log('test')
          car()
        }, 3000);
      }

}
car()
}

movieDetail=()=>{
//Will call action to get details by passing the state.movieIndex, which will get the data from the upcoming Movies
//this.props.upcoming(state.movieIndex).id   ...
}
render(){
  const params = {
        slidesPerView: 7,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    if(!this.props.upcoming){
      return (<div>Loading</div>)
    }
    return(
      <section className="home-page">
        <button onClick={this.movieIndex}>testing</button>
        <div className ="main-image" onClick={this.movieDetail}>
          <div className ="img" style={{
            backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), url(https://image.tmdb.org/t/p/original${this.props.upcoming[this.state.movieIndex].backdrop_path}) `,
            backgroundSize:"cover",
            backgroundPosition:"center center no-repeat",
            height:"100%"
          }}>
          </div>
          <div className ="main-details">
            <h1>{this.props.upcoming[this.state.movieIndex].title}</h1>
            {this.filterGenre(this.props.upcoming[this.state.movieIndex].genre_ids)}
            <h3>Rating ***** </h3>
          </div>
        </div>


        <Swiper {...params} ref={node => (node) ? this.swiper = node.swiper: null }>
              <div>Slide 1</div>
              <div>Slide 2</div>
              <div>Slide 3</div>
              <div>Slide 4</div>
              <div>Slide 5</div>
              <div>Slide 6</div>
              <div>Slide 7</div>
              <div>Slide 8</div>
              <div>Slide 9</div>
              <div>Slide 10</div>
              <div>Slide 11</div>
              <div>Slide 12</div>
              <div>Slide 13</div>
              <div>Slide 14</div>
              <div>Slide 15</div>
            </Swiper>
            <button onClick={this.goNext}>Next</button>
            <button onClick={this.goPrev}>Prev</button>
        <div className="upcoming-movies">
          <h1>Upcoming Movies</h1>
          <h1>Current Page: {this.state.popular}</h1>
          <button onClick={this.handlePopularPage}>Next Page</button>
          <ul>{this.upcomingMovie()}</ul>
        </div>
  </section>)

}
}

function mapStatetoProps(state){
  return {
    upcoming:state.movies.upComingMovies.results,
    popular:state.movies.popularMovies.results,
    genres:state.movies.genreMovies.genres
  }
}
export default connect(mapStatetoProps, { fetchUpcomingtMovies, fetchPopularMovies, fetchGenreMovie })(HomePage)
