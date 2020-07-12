import React from "react";

export default function Error(props) {
  return (
    <span style={{ color: "#ff0033", fontSize: "12px" }}>{props.message}</span>
  );
}
