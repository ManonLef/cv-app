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

  function changeHandler(e) {
    console.log(e.target.value, e.target.id)
    setPersonalDetails({
      ...personalDetails,
      [e.target.id]: e.target.value
    })
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
              onChange={changeHandler}
            />
            <InputField
              name="Last Name"
              label="lastName"
              value={personalDetails.lastName}
              onChange={changeHandler}
            />
            <InputField
              name="Email"
              type="email"
              label="email"
              value={personalDetails.email}
              onChange={changeHandler}
            />
            <InputField
              name="Phone"
              type="tel"
              label="phone"
              value={personalDetails.phone}
              onChange={changeHandler}
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
