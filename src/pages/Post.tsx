import React, { useState } from "react";
import styles from "../features/counter/Counter.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { fetchData, postSelector } from "../store/slices/postSlice";
import { useSelector } from "react-redux";

type Props = {};

export default function Post({}: Props) {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const postReducer = useSelector(postSelector);

  return (
    <>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <div className={styles.row}>
          <h1>Fetch Post</h1>
        </div>

        {postReducer.loading ? (
          <>
            <div className={styles.row}>
              <h1>Loading...</h1>
            </div>
          </>
        ) : (
          <>
            <div className={styles.row}>
              <h1>Data: </h1>
              <h1>
                {postReducer.data != null ? postReducer.data[0].title : ""}
              </h1>
            </div>
            <div className={styles.row}>
              <h1>Error: </h1>
              <h1>{String(postReducer.error)}</h1>
            </div>  
          </>
        )}

        <div className={styles.row}>
          <p>ID: </p>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <button
          className={styles.button}
          onClick={() => dispatch(fetchData(input))}
          style={{ marginTop: "5px" }}
        >
          Find Post
        </button>
        <button
          className={styles.button}
          onClick={() => navigate("/")}
          style={{ marginTop: "5px" }}
        >
          Home
        </button>
      </div>
    </>
  );
}
