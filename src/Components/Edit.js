import { useEffect, useState } from "react";

export default function Edit({
  employees,
  selectedEmployee,
  setEmployees,
  setIsEditing,
}) {
  // console.log("selectedEmployee", selectedEmployee);
  const id = selectedEmployee.id;
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = () => {};

  return (
    <>
      <div className="small-container">
        <form onSubmit={handleUpdate}>
          <h1>Edit Employee</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            name="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            name="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            name="salary"
            id="salary"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <div style={{marginTop: "30px"}}>
            <input type="submit" value="Update"/>
            <input
            style={{marginLeft: "12px"}}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={()=>{setIsEditing(false)}}
            />
          </div>
        </form>
      </div>
    </>
  );
}
