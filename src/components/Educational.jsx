import { useState } from "react";
import InputField from "./InputField";

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

  function changeSchool(e) {
    const newDetails = { ...education, schoolName: e.target.value };
    setEducation(newDetails);
  }

  function changeStudies(e) {
    const newDetails = { ...education, studies: e.target.value };
    setEducation(newDetails);
  }

  function changeFrom(e) {
    const newDetails = { ...education, from: e.target.value };
    setEducation(newDetails);
  }

  function changeTo(e) {
    const newDetails = { ...education, to: e.target.value };
    setEducation(newDetails);
  }

  return (
    <>
      {editing ? (
        <form className="w-full max-w-sm">
          <InputField
            name="School Name"
            label="schoolName"
            value={education.schoolName}
            onChange={changeSchool}
          />
          <InputField
            name="Field of Study"
            label="studies"
            value={education.studies}
            onChange={changeStudies}
          />
          <InputField 
            type="date"
            name="Date started"
            label="startDate"
            value={education.from}
            onChange={changeFrom}
          />
          <InputField 
            type="date"
            name="Date finished"
            label="endDate"
            value={education.to}
            onChange={changeTo}
          />
          <button onClick={changeEdit} aria-label="submit">
            submit
          </button>
        </form>
      ) : (
        <div className="education">
          {education.schoolName !== "" && (
            <div>school: {education.schoolName}</div>
          )}
          {education.studies !== "" && <div>studies: {education.studies}</div>}
          {(education.from !== "" && education.to !== "") && <div>from {education.from} to {education.to}</div>}
          <button onClick={changeEdit} aria-label="edit">
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
      <h2>Educational Info</h2>

      {educationList.map((edu) => {
        return (
          <div key={edu.key}>
            <EducationalInfo />
            <button onClick={() => removeEdu(edu.key)} aria-label="remove">
              remove
            </button>
          </div>
        );
      })}

      <button onClick={addEducation} aria-label="add education">
        +
      </button>
    </>
  );
}
