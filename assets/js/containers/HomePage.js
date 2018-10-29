import React, { Component } from 'react';
import ReactDom from 'react-dom'
import { fetchUpcomingtMovies, fetchPopularMovies, fetchGenreMovie } from '../actions/movies'
import { connect } from 'react-redux';
import Swiper from 'swiper';
class HomePage extends Component {

componentWillMount(){
      this.props.fetchGenreMovie()
  this.props.fetchUpcomingtMovies()
  this.props.fetchPopularMovies()

}
showGenre =(movie)=>{
  return movie.map((id, i)=>{
    let genreTitle = 'Sorry..cant find'
    this.props.genres.map((genre)=>{
      if(id==genre.id){
        genreTitle =genre.name
      }
    })
    return (<h2 key ={i}>{genreTitle}</h2>)
  })
}
showGen = (id) =>{
  let genre = this.props.genres.filter(item => { if (item.id ==id) return item.name} );
  let genre2 = this.props.genres.filter(item => item.id ===id[0] || item.id == id[1])
  // let newArray = this.props.genres.filter(item=>item.id === id || item.id ===id ? item.name : 'no');
  console.log(genre2)
  let name1 = genre2[0] !==undefined ? genre2[0].name :' '
  let name2 = genre2[1] !==undefined ? genre2[1].name :' '
return name1+" / "+name2
}

 upcomingMovies = () =>{
  return this.props.upcoming.map((movie) =>{
    return (<li key ={movie.id}>
      <div className="img">
        <img src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className ="info">
        <h1>{movie.title}</h1>
        <h2>{this.showGen(movie.genre_ids)}</h2>
      </div>
    </li>)
  })}


render(){

    if(!this.props.upcoming){
      return (<div>Loading</div>)
    }
    return(
      <section className="home">
        <section id="upcoming-movies">
          <ul>{this.upcomingMovies()}</ul>
        </section>
      </section>


    )
}

}

function mapStatetoProps(state){
  return {
    upcoming:state.movies.upComingMovies.results,
    genres:state.movies.genreMovies.genres
  }
}
export default connect(mapStatetoProps, { fetchUpcomingtMovies, fetchPopularMovies, fetchGenreMovie })(HomePage)
