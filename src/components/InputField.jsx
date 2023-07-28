import React from "react";

export default function InputField({type = "text", label, name, value, onChange}) {

  return (
    <label htmlFor={label}>
      {name + ":"}
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}