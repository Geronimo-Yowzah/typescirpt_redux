import React, { useState } from "react";
import logo from "../../logo.svg";
import { useSelector } from "react-redux";
import {
  counter1Selector,
  decrement,
  increment,
  setValueAsync,
} from "../../../src/main/store/slices/counter1Slice";
import styles from "../../features/counter/Counter.module.css";
import { useAppDispatch } from "../../main/store/store";
import { useNavigate } from "react-router-dom";
import ToggleSwicth from "../components/toggleSwicth";

// import theme from "../themes/secondary";
import theme from "../themes/default";
import { Div, LinkPrimary, LinkSecondary, LinkWarning } from "../styles/components/styleComponent";

interface Props {}

export default function Page1({}: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const counter1Reducer = useSelector(counter1Selector);
  const [value, setValue] = useState("2");
  const Value = Number(value) || 0;

  return (
    <Div style={{ display: 'grid', justifyContent: 'center'}}>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <span>
          <span>Learn </span>
          <LinkPrimary
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </LinkPrimary>
          <span>, </span>
          <LinkSecondary
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </LinkSecondary>
          <span>, </span>
          <LinkWarning
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </LinkWarning>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
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
      <p>
        setValue:{" "}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      <button
        className={styles.asyncButton}
        onClick={() => dispatch(setValueAsync(Value))}
      >
        SetValue Async
      </button>
      <button
        className={styles.button}
        onClick={() => navigate("/page2")}
        style={{ marginTop: "5px" }}
      >
        Go to Page2
      </button>
      <button
        className={styles.button}
        onClick={() => navigate("/post")}
        style={{ marginTop: "5px" }}
      >
        Go to Post Page
      </button>
      <button
        className={styles.button}
        onClick={() => navigate("/location")}
        style={{ marginTop: "5px" }}
      >
        Go to Location Page
      </button>
      <p>
        <code>src/pages/Page1.tsx</code>
      </p>
    </Div>
  );
}
