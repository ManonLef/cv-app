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

  function changeEdit() {
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

  return (
    <>
      {editing ? (
        <>
          <InputField
            type="text"
            label="school name"
            value={education.schoolName}
            onChange={changeSchool}
          />
          <InputField
            type="text"
            label="studies"
            value={education.studies}
            onChange={changeStudies}
          />
          <button onClick={changeEdit}>submit</button>
        </>
      ) : (
        <>
          <>school: {education.schoolName}</>
          <>studies: {education.studies}</>
          <button onClick={changeEdit}>edit</button>
        </>
      )}
    </>
  );
}

export default function EducationSection() {
  const [counter, setCounter] = useState(1);
  const [education, setEducation] = useState([{ key: counter }]);

  function addEducation() {
    const newEducation = [...education];
    const newCount = counter + 1;
    newEducation.push({ key: newCount });

    setCounter(newCount);
    setEducation(newEducation);
  }

  return (
    <>
      <h2>Educational Info</h2>
      <div>
        {education.map((edu) => {
          return (
            <div key={edu.key}>
              <EducationalInfo />
            </div>
          );
        })}
      </div>
      <button onClick={addEducation}>add education</button>
    </>
  );
}
