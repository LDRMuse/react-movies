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
      <label className="label" htmlFor="search">Search for your Favorite Movies!</label>
      <div className='field'>
        <div className="control">
          <input className="my-2" type="search" id="search" placeholder="E.g. Harry Potter" />
        </div>
      </div>

      <button className='button is-primary'>Search Movies!</button>
    </form>


  )
}

Form.propTypes = {
  handler: PropTypes.func
}
