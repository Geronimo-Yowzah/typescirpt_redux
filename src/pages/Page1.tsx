import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { counter1Selector, decrement, increment, setValueAsync } from '../store/slices/counter1Slice'
import styles from '../features/counter/Counter.module.css';
import { useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';

interface Props {}

export default function Page1({ }: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const counter1Reducer = useSelector(counter1Selector);
    const [value, setValue] = useState('2');
    const Value = Number(value) || 0;

    return (
        <div style={{display:'grid', justifyContent:'center'}}>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{counter1Reducer.value}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <p>setValue: <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /></p>
            <button
                className={styles.asyncButton}
                onClick={() => dispatch(setValueAsync(Value))}
            >
                SetValue Async
            </button>
            <button className={styles.button} onClick={() => navigate('/page2')} style={{marginTop:'5px'}}>Go to Page2</button>
            <p>
                <code>src/pages/Page1.tsx</code>
            </p>
        </div>

    )
}