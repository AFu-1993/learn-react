import React from 'react'
interface Props {
  name: string
}

const Demo: React.FC<Props> = (props: Props) => {
  return <div>{props.name}</div>
}

export default Demo
