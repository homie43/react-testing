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
            <h1 data-testid='value-title'>{value}</h1>
            <button data-testid='increment' onClick={onIncriment}>
                INCR
            </button>
            <button data-testid='decrement' onClick={onDecrement}>
                DECR
            </button>
            <button onClick={onReset}>RESET</button>
        </div>
    );
};

export default Counter;
