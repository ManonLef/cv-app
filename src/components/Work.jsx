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

  function changeEdit() {
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
        <>
          <InputField
            type="text"
            label="company name"
            value={work.compName}
            onChange={changeCompany}
          />
          <InputField
            type="text"
            label="position"
            value={work.position}
            onChange={changePosition}
          />
          <InputField
            type="text"
            label="from"
            value={work.from}
            onChange={changeFrom}
          />
          <InputField
            type="text"
            label="position"
            value={work.to}
            onChange={changeTo}
          />
          <button onClick={changeEdit}>submit</button>
        </>
      ) : (
        <>
          <>company: {work.compName}</>
          <>position: {work.position}</>
          <>from: {work.from}</>
          <>to: {work.to}</>
          <button onClick={changeEdit}>edit</button>
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
    setWorkList(newWorkList)
  }

  return (
    <>
      <h2>Company Info</h2>
      <div>
        {workList.map((work) => {
          return (
            <div key={work.key}>
              <WorkInfo />
              <button onClick={() => removeWork(work.key)}>remove</button>
            </div>
          );
        })}
      </div>
      <button onClick={addWork}>add work</button>
    </>
  );
}
