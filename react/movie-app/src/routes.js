import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MovieList from './components/MovieList/MovieList'
import Movie from './components/Movie/Movie'
import Login from './components/Login/Login'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/movie/:id" component={Movie} />
      <Route exact path="*" component={MovieList} />
    </Switch>
  )
}