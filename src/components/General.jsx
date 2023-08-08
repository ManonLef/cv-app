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
      <HeaderTwo text="General Information" />
      <div className="w-full max-w-xl bg-white shadow-md rounded p-6 mb-4 bg-opacity-25">
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
            <InputField
              name="Phone"
              type="tel"
              label="phone"
              value={personalDetails.phone}
              onChange={changePhone}
            />
            <button
              className="w-full text-white bg-white bg-opacity-20 font-semibold py-1 px-4 border-2 rounded border-white hover:border-transparent hover:bg-white hover:text-purple-500"
              onClick={changeEdit}
              aria-label="submit">
              submit
            </button>
          </form>
        ) : (
          <div className="text-white">
            {(personalDetails.firstName !== "" ||
              personalDetails.lastName !== "") && (
              <div>
                {personalDetails.firstName} {personalDetails.lastName}
              </div>
            )}
            {personalDetails.email !== "" && <div>{personalDetails.email}</div>}
            {personalDetails.phone !== "" && <div>{personalDetails.phone}</div>}
            <button
              onClick={changeEdit}
              aria-label="edit"
              className="text-white bg-white bg-opacity-20 font-semibold py-1 px-4 rounded hover:bg-white hover:text-purple-500">
              edit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
