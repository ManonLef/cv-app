import { useState } from "react";
import InputField from "./InputField";
import HeaderTwo from "./HeaderTwo";

function EducationalInfo() {
  const [editing, setEditing] = useState(true);
  const [education, setEducation] = useState({
    schoolName: "",
    studies: "",
    from: "",
    to: "",
  });

  function changeEdit(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  function changeHandler(e) {
    setEducation({
      ...education,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      {editing ? (
        <form>
          <InputField
            name="School Name"
            label="schoolName"
            value={education.schoolName}
            onChange={changeHandler}
          />
          <InputField
            name="Field of Study"
            label="studies"
            value={education.studies}
            onChange={changeHandler}
          />
          <InputField
            type="date"
            name="Date started"
            label="from"
            value={education.from}
            onChange={changeHandler}
          />
          <InputField
            type="date"
            name="Date finished"
            label="to"
            value={education.to}
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
        <div>
          {education.schoolName !== "" && (
            <div>school: {education.schoolName}</div>
          )}
          {education.studies !== "" && <div>studies: {education.studies}</div>}
          {education.from !== "" && education.to !== "" && (
            <div>
              from {education.from} to {education.to}
            </div>
          )}
          <button
            onClick={changeEdit}
            aria-label="edit"
            className="text-white bg-white bg-opacity-20 font-semibold py-1 px-4 rounded hover:bg-white hover:text-purple-500">
            edit
          </button>
        </div>
      )}
    </>
  );
}

export default function EducationSection() {
  const [counter, setCounter] = useState(1);
  const [educationList, setEducationList] = useState([{ key: counter }]);

  function addEducation() {
    const newEducation = [...educationList];
    const newCount = counter + 1;
    newEducation.push({ key: newCount });

    setCounter(newCount);
    setEducationList(newEducation);
  }

  function removeEdu(key) {
    const newEducationList = educationList.filter((item) => item.key !== key);
    setEducationList(newEducationList);
  }

  return (
    <>
      <HeaderTwo text="Education" />

      {educationList.map((edu) => {
        return (
          <div
            className="w-full max-w-xl flex flex-col gap-2 bg-white shadow-md rounded p-6 mb-4 bg-opacity-25 text-white"
            key={edu.key}>
            <EducationalInfo />
            <button
              onClick={() => removeEdu(edu.key)}
              aria-label="remove"
              className="text-white bg-white bg-opacity-20 font-semibold py-1 px-4 rounded hover:bg-white hover:text-purple-500">
              remove education
            </button>
          </div>
        );
      })}

      <button
        onClick={addEducation}
        aria-label="add education"
        className="text-white bg-white bg-opacity-20 py-1 px-4  rounded hover:border-transparent hover:bg-white hover:text-purple-500">
        + add education
      </button>
    </>
  );
}
