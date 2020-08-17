import React, { useState } from 'react'

import { Cards } from './Cards'
import { Form as Search } from './Form'

import api from 'api'

export const MovieSearch = () => {
  const [movies, setMovies] = useState([])

  const searchHandler = async (event) => {
    const { results } = await api.index(event.target.elements[0].value)
    setMovies(results)
  }


  return (
    <main className="has-text-centered">
      <Search handler={searchHandler} />
      <Cards movies={movies} />
      <footer className="footer has-text-centered">
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-quarter">
            <a href="https://www.netflix.com/"><img className="image is-32x32" src="https://i.pinimg.com/originals/8c/51/0e/8c510ee7de078ac4eaafdb9d15a810dd.png"
              alt="Netflix" /></a>
          </div>
          <div className="column is-one-quarter">

            <a href="https://www.hulu.com/welcome"><img className="image is-32x32" src="https://media.glassdoor.com/sqll/43242/hulu-squarelogo-1537204685767.png"
              alt="Hulu" /></a>
          </div>
          <div className="column is-one-quarter">
            <a href="https://www.starz.com/"><img className="image is-32x32" src="https://yt3.ggpht.com/a/AATXAJwlvPYVk2jBSPt9BhzCJLhaviuMfyEXCVAWQ8vf=s900-c-k-c0xffffffff-no-rj-mo"
              alt="starz" /></a>
          </div>
          <div className="column is-one-quarter">

            <a href="https://www.disneyplus.com/"><img className="image is-32x32" src="https://lh3.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ"
              alt="disneyplus" /></a>
          </div>
        </div>
        <div className="content has-text-centered">

        </div>
      </footer>
    </main>
  )
}
