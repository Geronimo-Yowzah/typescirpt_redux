import React from 'react'
import { counter2Selector, decrement, increment } from '../store/slices/counter2Slice';
import { useSelector } from 'react-redux';
import styles from '../features/counter/Counter.module.css';
import { useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';

interface Props {}

export default function Page2({ }: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const counter2Reducer = useSelector(counter2Selector);
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
                <span className={styles.value}>{counter2Reducer.value}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <button className={styles.button} onClick={() => navigate('/')} style={{marginTop:'5px'}}>Home</button>
            <p>
                <code>src/pages/Page2.tsx</code>
            </p>
        </div>
    )
}