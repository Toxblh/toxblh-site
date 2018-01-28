import React, { Component } from 'react'
import Main from 'app/Main'
import About from 'app/About'
import 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Footer } from './styles'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header>asd</Header>
          <main>
            <Route path="/" component={Main} />
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
