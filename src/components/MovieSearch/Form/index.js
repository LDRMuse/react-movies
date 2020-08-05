import PropTypes from 'prop-types'
import React from 'react'

export const Form = ({ handler }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    handler(event)
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="search" />
    <button>Search Movies!</button>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func
}
