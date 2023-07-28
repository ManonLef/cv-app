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
    e.preventDefault()
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
        <form>
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
        </form>
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
    setEducationList(newEducationList)
  }

  return (
    <>
      <h2>Educational Info</h2>
      <div>
        {educationList.map((edu) => {
          return (
            <div key={edu.key}>
              <EducationalInfo />
              <button onClick={() => removeEdu(edu.key)}>remove</button>
            </div>
          );
        })}
      </div>
      <button onClick={addEducation}>add education</button>
    </>
  );
}
