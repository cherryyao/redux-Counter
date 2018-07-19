import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers'
import  { increment,decrement,multiply } from './action'

const store = createStore(counter)
const rootEl = document.getElementById('root')


const render = () => ReactDOM.render(
    <App
        state={store.getState()}
        onIncrement={() => store.dispatch(increment())}
        onDecrement={() => store.dispatch(decrement())}
        onMultiply={(multiplier)=>store.dispatch(multiply(multiplier))}
    />,
    rootEl
)

render()
store.subscribe(render)