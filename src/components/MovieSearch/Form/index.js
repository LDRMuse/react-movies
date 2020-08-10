import PropTypes from 'prop-types'
import React from 'react'


export const Form = ({ handler }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    handler(event)
  }

  return (

    <form className="field" onSubmit={handleSubmit}>
      <h1 className='title is-1'>Movie Search App</h1>

        <label className="label">Search for your Favorite Movies!</label>

        <div className="control">
          <input className="input" type="search" placeholder="E.g. Harry Potter" />
        </div>

      <button className='button is-primary'>Search Movies!</button>
    </form>


  )
}

Form.propTypes = {
  handler: PropTypes.func
}
