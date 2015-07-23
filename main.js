import React from 'react'

class App extends React.Component {
  state = { n: 0 }
  constructor () {
    super()
  }
  render () {
    return <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={::this.handleClick}>click me!</button>
    </div>
  }
  handleClick () {
    this.setState({ n: this.state.n + 1 })
  }
}
React.render(<App />, document.querySelector('#content'))
