import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../../redux/slice/selectors/getCounterValue/getCounterValue';
import { decrement, increment, reset } from '../../redux/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const onIncriment = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    const onReset = () => {
        dispatch(reset());
    };

    return (
        <div>
            <h1>value = {value}</h1>
            <button onClick={onIncriment}>INCR</button>
            <button onClick={onDecrement}>DECR</button>
            <button onClick={onReset}>RESET</button>
        </div>
    );
};

export default Counter;
