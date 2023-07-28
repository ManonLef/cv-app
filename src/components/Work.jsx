import { useState } from "react";
import InputField from "./InputField";

function WorkInfo() {
  const [editing, setEditing] = useState(true);
  const [work, setWork] = useState({
    compName: "",
    position: "",
    from: "",
    to: "",
  });

  function changeEdit(e) {
    e.preventDefault();
    setEditing(!editing);
  }

  function changeCompany(e) {
    const newDetails = { ...work, compName: e.target.value };
    setWork(newDetails);
  }

  function changePosition(e) {
    const newDetails = { ...work, position: e.target.value };
    setWork(newDetails);
  }

  function changeFrom(e) {
    const newDetails = { ...work, from: e.target.value };
    setWork(newDetails);
  }

  function changeTo(e) {
    const newDetails = { ...work, to: e.target.value };
    setWork(newDetails);
  }

  return (
    <>
      {editing ? (
        <form>
          <InputField
            name="Company Name"
            label="compName"
            value={work.compName}
            onChange={changeCompany}
          />
          <InputField
            name="Position"
            label="position"
            value={work.position}
            onChange={changePosition}
          />
          <InputField
            name="From"
            label="from"
            value={work.from}
            onChange={changeFrom}
          />
          <InputField
            name="To"
            label="position"
            value={work.to}
            onChange={changeTo}
          />
          <button onClick={changeEdit} aria-label="submit">submit</button>
        </form>
      ) : (
        <>
          <>company: {work.compName}</>
          <>position: {work.position}</>
          <>from: {work.from}</>
          <>to: {work.to}</>
          <button onClick={changeEdit} aria-label="edit">edit</button>
        </>
      )}
    </>
  );
}

export default function WorkSection() {
  const [counter, setCounter] = useState(1);
  const [workList, setWorkList] = useState([{ key: counter }]);

  function addWork() {
    const newWork = [...workList];
    const newCount = counter + 1;
    newWork.push({ key: newCount });

    setCounter(newCount);
    setWorkList(newWork);
  }

  function removeWork(key) {
    const newWorkList = workList.filter((item) => item.key !== key);
    setWorkList(newWorkList);
  }

  return (
    <>
      <h2>Company Info</h2>
      
        {workList.map((work) => {
          return (
            <div key={work.key} className="form-container">
              <WorkInfo />
              <button onClick={() => removeWork(work.key)} aria-label="remove">remove</button>
            </div>
          );
        })}
      
      <button onClick={addWork} aria-label="add work">+</button>
    </>
  );
}
