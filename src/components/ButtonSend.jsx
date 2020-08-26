import React from "react";

export default function ButtonSend(props) {
  const { lable, handleOnClick } = props;
  return (
    <button onClick={handleOnClick} className="btn btn-primary btn-block">
      {lable}
    </button>
  );
}
