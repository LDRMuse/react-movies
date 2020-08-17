import React, { useState } from 'react'

import { Cards } from './Cards'
import { Form as Search } from './Form'

import api from 'api'

export const MovieSearch = () => {
  const [movies, setMovies] = useState([])

  const searchHandler = async (event) => {
    const { results } = await api.index(event.target.elements[0].value)
    console.log(results);
    setMovies(results)
  }


  return (
    <main className="has-text-centered">
      <Search handler={searchHandler} />
      <Cards movies={movies} />
      <img alt="movie poster" src="https://ae01.alicdn.com/kf/HTB1FVh3XCf2gK0jSZFPq6xsopXaY/Marvel-Comics-Movie-Poster-Retro-Poster-Avengers-Poster-Star-Wars-Poster-Various-Classic-Movie-Posters.jpg_960x960.jpg" />
      <footer className="footer has-text-centered">

      </footer>
    </main>
  )
}
