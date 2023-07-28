import React from "react";

export default function InputField({type, label, value, onChange}) {

  return (
    <label htmlFor={label}>
      {label}:
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}