import React, { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ListWarp from './components/ListWarp'

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
  // Demo2 = () => {
  //   const { count } = this.state
  //   return (
  //     <div className="wrap">
  //       wrap{count}
  //       <Demo onClick={this.addOne} name="app-demo">
  //         a {count}
  //       </Demo>
  //     </div>
  //   )
  // }
  render() {
    const { count } = this.state
    // eslint-disable-next-line valid-jsdoc
    /**
     * TODO:
     * 先前的结论：不应该在render函数/组件函数中定义render函数，内部定义的组件不会被react缓存
     * 更近的结论：在父render函数中定义的render函数会被认定为一个新组件，每次调用父render都会得到一个新render组件。寻找答案的方向应该是在react的diff算法 即 <Demo2></Demo2> 不同于 Demo2()
     */
    const Demo2 = (
      <Demo onClick={this.addOne} name="app-demo">
        a {count}
      </Demo>
    )
    return <div>{Demo2}</div>
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
