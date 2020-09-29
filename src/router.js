import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from 'view/Home'
import SignUp from 'view/SignUp'
import 'style/global.css'

const Routes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      timeout={1000}
      classNames={'fade'}
      key={location.pathname}
    >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
))
export default () => {
  return (<Router>
    <Routes/>
  </Router>)
}
