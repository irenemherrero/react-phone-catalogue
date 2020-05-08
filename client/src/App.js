import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './routes/Home'
import { Phone } from './routes/Phone'
import { Header } from './common/Header'

const App = () => {
  return (
    <Router>
      <Header />
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
