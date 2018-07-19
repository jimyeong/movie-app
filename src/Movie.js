import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';


function Movie ({title, poster, genres, synopsis}){
    return(
        <div className="movie">
            <div className="movie__columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="movie__columns">
                <h1>{title}</h1>
                <div className="movie__genre">
                    {genres.map((genre,i) => {
                        return <MovieGenre genre={genre} key={i}/>

                    })}

                </div>
                <p className="movie_synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

export default Movie

function MoviePoster ({poster, alt}){
        return(
            <img src={poster} alt={alt} title={alt} className="movie__poster"/>

        )
}



function MovieGenre({genre}) {
    return (
        <span className="movie__Genre">
            {genre}
        </span>
    )
    
}



Movie.PropTypes = {
    title : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
};
MoviePoster.PropTypes={
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired

}

MovieGenre.PropTypes={
    genres:PropTypes.string.isRequired
}
