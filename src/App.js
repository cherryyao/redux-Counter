import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.textValue = React.createRef();

  }
  setMultiplier=()=>{
    const inputVaule = this.textValue.current.value;
    this.props.onMultiply(inputVaule) ; 
  }

  render() {
    const { state, onIncrement, onDecrement,onMultiply } = this.props;
    return (
      <div className="App">
        <p>
          Clicked: {state} times
        {' '}
          <button onClick={onIncrement}>
            +
          </button>
          <button onClick={onDecrement}>
            -
          </button>
          <button onClick={this.setMultiplier}>
            *
          </button>
          <input type="text"  ref={this.textValue}/>

        </p >
      </div>
    );
  }
}

export default App;