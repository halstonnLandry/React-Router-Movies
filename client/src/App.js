import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie.js'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList/>
      </Route>
    
      <Route path="/movies/movieList/:movieID">
      <Movie/>
      </Route>
    </div>
  );
};

export default App;
