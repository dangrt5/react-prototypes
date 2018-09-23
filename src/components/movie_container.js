import React, {Component} from "react";
import Movie from "./movies";
import axios from "axios";


class MovieContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentWillMount() {
    const ITUNES_URL = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
    axios.get(ITUNES_URL).then(response => {
      const {entry} = response.data.feed;
      this.setState({
        movies: entry
      })
    });
  }

  render() {
    const movieList = this.state.movies.map((movieInfo, index) => {
      return (
        <Movie key={index} info={movieInfo}/>
      )
    });
    console.log(this.state);
    return (
      <div>
        {movieList}
      </div>
    )
  }
}

export default MovieContainer;
