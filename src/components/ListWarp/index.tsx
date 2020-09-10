import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class ListWrap extends Component<any, any> {
  lockTop = false
  componentDidMount() {
    const { className } = this.props
    const bs = new BScroll(document.querySelector('.' + className) as any, {
      scrollY: true,
      click: true,
      // probeType: 3,
      pullDownRefresh: true,
      directionLockThreshold:3,
      bounce:true,
      useTransition:false,
    })
    const TOP = 40
    bs.on('scroll', this.scrollHandler)

    bs.on('pullingDown', this.pullingDownHandler)
    window.huang = bs
  }
  scrollHandler = async (position: { x1: number; y: number }) => {
    const y = position.y
    console.log('y:', y)
  }
  pullingDownHandler = async () => {
    console.log('pullingDownHandler', window.huang.y)

    await new Promise((res) => {
      setTimeout(() => {
        res()
      }, 3000)
    })
    this.finishPullDown()
  }
  async finishPullDown() {
    await new Promise((resolve) => {
      setTimeout(() => {
        window.huang.finishPullDown()
        resolve()
      }, 1000)
    })
    setTimeout(() => {
      window.huang.refresh()
    }, 1000)
  }

  state = {
    pullDownText: '刷新',
    pullUpText: '加载',
  }
  render() {
    const { className, orderList } = this.props
    const { pullDownText, pullUpText } = this.state
    return (
      <div className={className}>
        <div className="scroll-content">
          <div className="pull-down">{pullDownText}</div>
          {orderList ? (
            <ul>
              {orderList.map((_item: any, index: any) => {
                return (
                  <li className="scroll-item" key={index}>
                    {index}
                  </li>
                )
              })}
            </ul>
          ) : (
            this.props.children
          )}
          <div className="pull-up">{pullUpText}</div>
        </div>
      </div>
    )
  }
}
