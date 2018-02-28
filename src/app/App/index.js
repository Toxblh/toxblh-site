import React, { Component } from 'react'
import Main from 'app/Main'
import About from 'app/About'
import HeaderMenu from 'components/HeaderMenu'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Footer } from './styles'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderMenu />
          <main>
            <Route exact path="/" component={Main} />
            <Route path="/news" component={Main} />
            <Route path="/about" component={About} />
          </main>
          <Footer>Toxblh 2012-2018</Footer>
        </div>
      </Router>
    )
  }
}

export default App
