import React from 'react'
import './App.css'
import ListWarp from './components/ListWarp'

const orderList = fillArray([], 30)
function fillArray(arr: Array<any>, length: number) {
  const originLength = arr.length
  if (originLength > length) {
    return arr
  } else {
    for (let i = originLength; i < length; i++) {
      arr[i] = i + 1
    }
    return arr
  }
}
function App() {
  return (
    <div className="App">
      <header>header</header>
      <ListWarp className="scroll-wrap" /* orderList={orderList} */>
        <ul>
          {orderList.map((item, index) => {
            return (
              <li className="scroll-item" key={index}>
                {index}
              </li>
            )
          })}
        </ul>
      </ListWarp>
      <footer>footer</footer>
    </div>
  )
}

export default App
