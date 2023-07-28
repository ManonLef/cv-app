import { useState } from "react";
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

  function changeEmail(e) {
    const newDetails = { ...personalDetails, email: e.target.value };
    setPersonalDetails(newDetails);
  }

  function changeEdit(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  return (
    <>
      <h2>General information</h2>
      {editing ? (
        <form>
          <InputField
            name="First Name"
            label="firstName"
            value={personalDetails.firstName}
            onChange={changeFirstName}
          />
          <InputField
            name="Last Name"
            label="lastName"
            value={personalDetails.lastName}
            onChange={changeLastName}
          />
          <InputField
            name="Email"
            type="email"
            label="email"
            value={personalDetails.email}
            onChange={changeEmail}
          />
          <button onClick={changeEdit} aria-label="submit">submit</button>
        </form>
      ) : (
        <>
          <>
            full name: {personalDetails.firstName} {personalDetails.lastName}
          </>
          <>email: {personalDetails.email}</>
          <button onClick={changeEdit} aria-label="edit">edit</button>
        </>
      )}
    </>
  );
}

// edit mode? show forms with submit button. Else: show html info with edit button
