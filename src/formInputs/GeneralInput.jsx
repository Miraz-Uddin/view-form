import React from "react";
import ShowErrors from "../components/showErrors";

export default function GeneralInput({
  label,
  reference,
  type,
  name,
  value,
  func,
  errorVal,
  isErrorShow,
  setErrorShow,
}) {
  let isInValid = false;
  if (errorVal) {
    if (errorVal.every((item) => item.type == "valid")) {
      isInValid = false;
    } else {
      isInValid = true;
    }
  }
  return (
    <div className="input-holder">
      <div className="form-floating mb-3">
        <input
          id="floatingInput"
          type={type}
          className={`form-control ${isInValid && "is-invalid"}`}
          name={name}
          placeholder={name}
          value={value}
          onChange={func}
          ref={reference}
          onBlur={() => {
            setErrorShow(null);
          }}
        />
        <label htmlFor="floatingInput">{label}</label>
      </div>
      <ShowErrors
        errors={errorVal}
        refId={name + "Error"}
        isErrorShow={isErrorShow}
      />
    </div>
  );
}
