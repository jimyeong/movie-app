import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';
class App extends Component {
    // Render componentWillMount() => render() => componentDidMount()
    // Update componentWillReceiveProps() => shouldComponentUpdate() => componentWillupdate() => render => componentDidUpdate()

    state={

    };

    componentWillMount(){

    }
    componentDidMount(){
        this._getMovies()
    }

    _renderMovie = () => {
        const movies =  this.state.movies.map((movie) => {
            console.log(movie)
            return  <Movie title={movie.title_english}
                           poster = {movie.medium_cover_image}
                           key={movie.id}
                           genres={movie.genres}
                           synopsis={movie.synopsis}
            />
        });
        return movies
    };

    _getMovies = async() => {
       const movies = await this._callAPi();
       this.setState({
           movies
       })

    };
    _callAPi = () => {
        return fetch('https://yts.nam/api/v2/list_movies.json?sort_by=rating')
            .then(potato => potato.json())
            .then(json => json.data.movies)
            .catch((err) => {
                console.log(err)
            })
    }

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovie() : 'loading' }
      </div>
    );
  }
}

export default App;
