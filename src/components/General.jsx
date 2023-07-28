import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import InputField from "./InputField";

export default function GeneralInfo() {
  const [editing, setEditing] = useState(true);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function changeFirstName(e) {
    const newDetails = { ...personalDetails, firstName: e.target.value };
    setPersonalDetails(newDetails);
  }

  function changeLastName(e) {
    const newDetails = { ...personalDetails, lastName: e.target.value };
    setPersonalDetails(newDetails);
  }

  function changeMail(e) {
    const newDetails = { ...personalDetails, email: e.target.value };
    setPersonalDetails(newDetails);
  }

  function changeEdit() {
    setEditing(!editing)
  }

  return (
    <>
      <h2>General information</h2>
      {editing ? (
        <>
          <InputField
            type="text"
            label="first name"
            value={personalDetails.firstName}
            onChange={changeFirstName}
          />
          <InputField
            type="text"
            label="last name"
            value={personalDetails.lastName}
            onChange={changeLastName}
          />
          <InputField
            type="email"
            label="email"
            value={personalDetails.email}
            onChange={changeMail}
          />
          <button onClick={changeEdit}>submit</button>
        </>
      ) : (
        <>
        <p>not editing</p>
        <button onClick={changeEdit}>edit</button>
        </>
      )}
    </>
  );
}

// edit mode? show forms with submit button. Else: show html info with edit button
