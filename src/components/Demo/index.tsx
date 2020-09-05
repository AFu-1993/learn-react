import React, { Component } from 'react'

export default class Demo extends Component<any, any> {
  handleClick = () => {
    console.log('Demo button Click')

    const { onClick } = this.props
    onClick && onClick()
  }
  componentDidMount() {
    console.log('Demo componentDidMount')
    this.handleClick()
  }
  render() {
    const { count, name } = this.props
    return (
      <div>
        <div>
          <h2>
            {name} {count}
          </h2>
          <button onClick={this.handleClick}>click</button>
        </div>
      </div>
    )
  }
}


