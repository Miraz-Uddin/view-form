import React from "react";

export default function ShowErrors({ errors, refId, isErrorShow }) {
  return (
    <>
      <ul
        id={refId}
        className={`suggestions ${
          isErrorShow && isErrorShow[refId + "Show"] ? "display-errors" : ""
        }`}
      >
        {errors &&
          errors.map((item, index) => {
            return (
              <li key={index} className={item.type}>
                {item.name}
              </li>
            );
          })}
      </ul>
    </>
  );
}
