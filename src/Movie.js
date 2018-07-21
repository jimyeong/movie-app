import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';
import LinesEllipsis from 'react-lines-ellipsis'


function Movie ({title, poster, genres, synopsis}){
    return(
        <div className="movie">
            <div className="movie__columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="movie__columns">
                <h1 class="movie__tit">{title}</h1>
                <p className="movie__txt1">
                    {genres.map((genre,i) => {
                        return <MovieGenre genre={genre} key={i}/>

                    })}

                </p>
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    component='p'
                    className="movie__synopsis"
                />
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
        <span className="movie__genre">
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
