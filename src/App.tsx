import React, { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ListWarp from './components/ListWarp'
import Demo from './components/Demo'

export default class App extends Component {
  state = {
    count: 1,
  }
  addOne = () => {
    console.log('addOne')

    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 0)
  }
  renderDemo() {
    return this.renderDemowrap()
  }
  renderDemowrap() {
    const { count } = this.state
    return (
      <div className="wrap">
        <Demo onClick={this.addOne} name="app-demo">
          {count}
        </Demo>
      </div>
    )
  }

  render() {
    const { count } = this.state

    const Demo2 = (
      <Demo onClick={this.addOne} name="app-demo">
        a {count}
      </Demo>
    )
    return <div><Demo2></Demo2></div>
    // return <div>{Demo2()}</div>
  }
}

/* function App() {
  const [count, setCount] = useState(0)
  const addOne = () => {
    console.log('addOne')

    setTimeout(() => {
      setCount(count + 1)
    }, 0)
  }
  const Demo2 = (
    <div className="wrap">
      <Demo onClick={addOne} name="app-demo">
        {count}
      </Demo>
    </div>
  )
  return (
    <div>
      <div>{Demo2}</div>
    </div>
  )
}

export default App */
