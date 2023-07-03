import './App.css';
import { useState } from "react";


function App() {

  const [data, setData] = useState([
    { id: 0, name: "სალომე", faculty: null },
    { id: 1, name: "ანი", faculty: null },
    { id: 2, name: "მარიამი", faculty: null },
    { id: 3, name: "ნინი", faculty: null },
  ]);


  const randomize = () => {
    data.forEach((student, index) => {
      setTimeout(() => {
        setData((prev) =>
          prev.map((item) =>
            item.id === student.id
              ? { ...item, faculty: Math.floor(Math.random() * 4) }
              : item
          )
        );
      }, index * 1000);
    });
  };

  return (
    <div className="App">
      <ul class="list-group container text-start" style={{ width: "300px" }}>
          {data?.map(
            (student) =>
              student.faculty === null && (
                <li key={student?.id} class="list-group-item">
                  {student?.name}
                </li>
              )
          )}
        </ul>
      <button onClick={randomize}  class="btn btn-primary mt-5">გამანაწილებელი ქუდი</button>
      <div className="d-flex align-items-start gap-2 mt-5">
          <div>
            <h4>გრიფინდორი</h4>
            <ul class="list-group container" style={{ width: "300px" }}>
              {data?.map(
                (student) =>
                  student.faculty === 0 && (
                    <li key={student?.id} class="list-group-item">
                      {student?.name}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div>
            <h4>რეივენქლო</h4>
            <ul class="list-group container" style={{ width: "300px" }}>
              {data?.map(
                (student) =>
                  student.faculty === 1 && (
                    <li key={student?.id} class="list-group-item">
                      {student?.name}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div>
            <h4>ჰაფლფაპი</h4>
            <ul class="list-group container" style={{ width: "300px" }}>
              {data?.map(
                (student) =>
                  student.faculty === 2 && (
                    <li key={student?.id} class="list-group-item">
                      {student?.name}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div>
            <h4>სლიზერინი</h4>
            <ul class="list-group container" style={{ width: "300px" }}>
              {data?.map(
                (student) =>
                  student.faculty === 3 && (
                    <li key={student?.id} class="list-group-item">
                      {student?.name}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
