import React, { Fragment } from 'react';
import './App.css';
import { MovieSearch } from './components'

export const App = () => {
  return (
    <Fragment><div className="container">
    <div className="notification">
    <h1 className='title is-1 has-text-centered'>Movie Search App</h1>
    </div>
  </div>

    <MovieSearch />
    </Fragment>
  );
}
