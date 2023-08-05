import { useState } from "react";
import InputField from "./InputField";

function WorkInfo() {
  const [editing, setEditing] = useState(true);
  const [work, setWork] = useState({
    compName: "",
    position: "",
    from: "",
    to: "",
    responsibilities: "",
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

  function changeResponsibilities(e) {
    const newDetails = { ...work, responsibilities: e.target.value };
    setWork(newDetails);
  }

  return (
    <>
      {editing ? (
        <form className="w-full max-w-sm">
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
            type="date"
            name="From"
            label="from"
            value={work.from}
            onChange={changeFrom}
          />
          <InputField
            type="date"
            name="To"
            label="position"
            value={work.to}
            onChange={changeTo}
          />
          <div className="md:flex md:items-center mb-6 gap-2">
            <div className="md:w-1/3">
              <label htmlFor="responsibilities" className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Responsibilities:</label>
            </div>
            <div className="md:w-2/3">
              <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500"
                name="Responsibilities"
                id="responsibilities"
                onChange={changeResponsibilities}
                value={work.responsibilities}></textarea>
            </div>
          </div>

          <button onClick={changeEdit} aria-label="submit">
            submit
          </button>
        </form>
      ) : (
        <>
          {work.compName !== "" && <div>{work.compName}</div>}
          {work.position !== "" && <div>{work.position}</div>}
          {work.from !== "" && work.to !== "" && (
            <div>
              from {work.from} to {work.to}
            </div>
          )}
          {work.responsibilities !== "" && <div>{work.responsibilities}</div>}
          <button onClick={changeEdit} aria-label="edit">
            edit
          </button>
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
            <button onClick={() => removeWork(work.key)} aria-label="remove">
              remove
            </button>
          </div>
        );
      })}

      <button onClick={addWork} aria-label="add work">
        +
      </button>
    </>
  );
}
