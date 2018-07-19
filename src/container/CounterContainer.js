import {connect} from 'react-redux'
import Counter from "../components/Counter";
import {decrement, increment, multiple,incrementDelay} from "../actions";


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onMultiple:(index, multipler) => dispatch(multiple(index,multipler)),
        onIncrementDelay:(index) => setTimeout(function(){dispatch(incrementDelay(index))},1000),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)