import { useState } from "react";
import InputField from "./InputField";
import HeaderTwo from "./HeaderTwo";

export default function GeneralInfo() {
  const [editing, setEditing] = useState(true);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

  function changePhone(e) {
    const newDetails = { ...personalDetails, phone: e.target.value };
    setPersonalDetails(newDetails);
  }

  function changeEdit(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  return (
    <>
      <HeaderTwo text="General Information"/>
      {editing ? (
        <form className="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <InputField
            name="Phone"
            type="tel"
            label="phone"
            value={personalDetails.phone}
            onChange={changePhone}
          />
          <button onClick={changeEdit} aria-label="submit">
            submit
          </button>
        </form>
      ) : (
        <div className="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {(personalDetails.firstName !== "" ||
            personalDetails.lastName !== "") && (
            <div>
              {personalDetails.firstName} {personalDetails.lastName}
            </div>
          )}
          {personalDetails.email !== "" && <div>{personalDetails.email}</div>}
          {personalDetails.phone !== "" && <div>{personalDetails.phone}</div>}
          <button onClick={changeEdit} aria-label="edit">
            edit
          </button>
        </div>
      )}
    </>
  );
}
