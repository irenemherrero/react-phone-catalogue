import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Home'
import { Phone } from './Phone'
import { Header } from './common'
import logo from './assets/logo.png'

const App = () => {
  return (
    <Router>
      <Header logoImg={logo} logoText="GS Phones" title="Phones Store" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/phone/:id" component={Phone} />
      </Switch>
    </Router>
  )
}

export { App }
