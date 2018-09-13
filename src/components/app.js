import React from "react";
import Table from "./table"

const App = () => {

  return <div className="container">
    <h1>Student Grade Table</h1>
      <Table data={students} />
    </div>
};

const students = [
  {student: "Michael", course: "English", grade: 35},
  {student: "Jane", course: "Racing", grade: 28},
  {student: "Huey", course: "Saving Lives", grade: 69}
];


export default App;
