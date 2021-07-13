import React, { useState } from 'react'

const App = (props) => {
  const [state, setState] = useState(props)
  const { name, price } = state

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <button onClick={() => setState(props)}>Reset</button>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App
