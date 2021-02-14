import React, { useEffect, useState, useCallback } from 'react'

let setName_copy: any
function Child({ name, onClick, output }: any) {
  console.log('Child eval')
  useEffect(() => {
    console.log('child effect run')
    output()
    return () => {
      console.log('child effect run:cleanup')
    }
  }, [output])
  return <div onClick={onClick}>child:{name}</div>
}

function Child2() {
  console.log('Child2 eval')
  const [name, setName] = useState('Child2')
  const onClick = () => {
    setName('Child2' + parseInt(String(Math.random() * 100), 16))
    setName_copy('app' + parseInt(String(Math.random() * 100), 16))
  }
  return <div onClick={onClick}>child:{name}</div>
}

export default function App() {
  console.log('App eval')

  const [name, setName] = useState('god')
  const onClick = () => {
    setName(name + Math.floor(Math.random() * 100))
  }
  setName_copy = setName
  const output = useCallback(() => {
    console.log(name)
  }, [name])
  return (
    <div>
      app
      <Child name={name} output={output} onClick={onClick}></Child>
      <Child2></Child2>
    </div>
  )
}
