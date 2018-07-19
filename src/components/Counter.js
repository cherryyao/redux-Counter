import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.inputText = React.createRef();
    }

    multiple = () => {
        const multiplier = this.inputText.current.value
        const onMultiple = this.props.onMultiple;
        onMultiple(this.props.index, multiplier)
    }

    render() {
        const {value, onIncrement, onDecrement, index} = this.props;
        //console.log(onIncrement)
        return (
                <p>
                    Clicked: {value} times
                    {' '}
                    <button onClick={()=>onIncrement(index)}>
                        +
                    </button>
                    <button onClick={()=>onDecrement(index)}>
                        -
                    </button>
                    <input type="text" defaultValue={0} ref={this.inputText}/>
                    <button onClick={this.multiple}>
                        *
                    </button>
                    <button>
                        delay +1
                    </button>

                </p>
        );
    }
}

export default Counter;
