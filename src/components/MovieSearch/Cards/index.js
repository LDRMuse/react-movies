import React from 'react'
import PropTypes from 'prop-types'


export const Cards = ({ movies }) => {

  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div className='has-background-primary box has-text-centered' key={movie.id}>
          <h2 className='is-size-2'>{movie.title}</h2>
          <p>
            <img alt='movies' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            /></p>
          <p>{movie.vote_average} Rating out of 10</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Movie Overview: {movie.overview}</p>
        </div>
      )
    })
  }

  return (
    renderMovies()
  )

}

Cards.propTypes = {
  movies: PropTypes.array
}

