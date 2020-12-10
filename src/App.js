import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };

  getMovies = async () => {
    const { 
      data: { 
        data: {movies} 
      } 
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    this.setState({movies ,isLoading:false});// ({movie: movies}) es6
    //movies.data.data.movies


    console.log(movies);
  };


  async componentDidMount() {
    this.getMovies();

  }



  render() {
    const { isLoading, movies } = this.state; //state 에서온 movies
    return <div>{isLoading ? "Loading...." : movies.map(movie =>(
      <Movie 
        key = {movie.id} //key가 있어야 함
        id = {movie.id} 
        year = {movie.year} 
        title = {movie.title} 
        summary = {movie.summary} 
        poster = {movie.medium_cover_image} 
      />
    ))}
  </div>;
  }
}

export default App;