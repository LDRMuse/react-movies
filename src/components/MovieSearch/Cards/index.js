import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

export const Cards = ({ movies }) => {

  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img alt='movies' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          />
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
