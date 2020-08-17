import PropTypes from 'prop-types'
import React from 'react'


import './Form.css'

export const Form = ({ handler }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    handler(event)
  }

  return (


    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
    <img alt="movie" src="https://ae01.alicdn.com/kf/HTB1FVh3XCf2gK0jSZFPq6xsopXaY/Marvel-Comics-Movie-Poster-Retro-Poster-Avengers-Poster-Star-Wars-Poster-Various-Classic-Movie-Posters.jpg_960x960.jpg"/>
      <label className="label" htmlFor="search">Search for your Favorite Movies!</label>
=======

      <label className="label"></label>
>>>>>>> bulma
      <div className='field'>
        <div className="control">
          <input className="input my-2" type="search" id="search" placeholder="E.g. Harry Potter" />
        </div>
      </div>
      <button className='button is-primary'>Search Movies!</button><br></br>
      <img src="https://ae01.alicdn.com/kf/HTB1FVh3XCf2gK0jSZFPq6xsopXaY/Marvel-Comics-Movie-Poster-Retro-Poster-Avengers-Poster-Star-Wars-Poster-Various-Classic-Movie-Posters.jpg_960x960.jpg"/>
    </form>


  )
}

Form.propTypes = {
  handler: PropTypes.func
}
