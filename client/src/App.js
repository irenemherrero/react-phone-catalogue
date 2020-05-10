import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Home'
import { Phone } from './Phone'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/phone/:id">
          <Phone />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
