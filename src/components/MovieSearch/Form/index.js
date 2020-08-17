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

      <label className="label"></label>
      <div className='field'>
        <div className="control">
          <input className="input my-5" type="search" id="search" placeholder="E.g. Fargo" />
        </div>
      </div>
      <button className='button is-primary'>Search Movies!</button><br></br>
    </form>


  )
}

Form.propTypes = {
  handler: PropTypes.func
}
