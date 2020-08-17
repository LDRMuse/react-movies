import React, { Fragment } from 'react';
import './App.css';
import { MovieSearch } from './components'

export const App = () => {
  return (
    <Fragment>
      <header className="has-background-light py-4 container">
        <div className="level">
          <div className="py-3 level-item has-background-primary">
            <a href="https://www.netflix.com/"><img className="image is-48x48" src="https://i.pinimg.com/originals/8c/51/0e/8c510ee7de078ac4eaafdb9d15a810dd.png"
              alt="Netflix" /></a>
          </div>
          <div className="py-3 level-item has-background-primary">
            <a href="https://www.hulu.com/welcome"><img className="image is-48x48" src="https://media.glassdoor.com/sqll/43242/hulu-squarelogo-1537204685767.png"
              alt="Hulu" /></a>
          </div>
          <div className="py-3 level-item has-background-primary">
            <a href="https://www.starz.com/"><img className="image is-48x48" src="https://yt3.ggpht.com/a/AATXAJwlvPYVk2jBSPt9BhzCJLhaviuMfyEXCVAWQ8vf=s900-c-k-c0xffffffff-no-rj-mo"
              alt="starz" /></a>
          </div>
          <div className="py-3 level-item has-background-primary">
            <a href="https://www.disneyplus.com/"><img className="image is-48x48" src="https://lh3.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ"
              alt="disneyplus" /></a>
          </div>
        </div>
        <h1 className='title is-1 has-text-centered mt-4 mb-4'>Movie Search App</h1>
      </header>

      <MovieSearch />
    </Fragment>
  );
}
