import React from "react";
import { useAppDispatch } from "../store/store";
import { isToggle, toggleSelector } from "../store/slices/toggleSlice";
import { useSelector } from "react-redux";

interface Props {}

function ToggleSwicth({}: Props) {
  const dispatch = useAppDispatch();

  const toggleReducer = useSelector(toggleSelector);

  return (
    <>
      <p>{toggleReducer.style}</p>
      <label className="switch">
        <input
          id="checkbox"
          type="checkbox"
          onClick={() => dispatch(isToggle())}
          onChange={() => false}
        />
      </label>
    </>
  );
}

export default ToggleSwicth;
