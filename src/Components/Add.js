import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

export default function Add({ employees, setEmployees, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    // const newEmployee = [
    //   id: id,
    //    // here id before ":" is key and id after ":" is value.
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   salary: salary,
    //   date: date
    // ];

    // Declaration of both newEmployee are right.
    // When both id and value is same i.e. id,
    // then we can declare the object(newEmployee) like the 2nd newEmployee one.

    const newEmployee = {id, firstName, lastName, email, salary, date};

    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added `,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="small-container">
        <form onSubmit={handleAdd}>
          <h1>Add Employee</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            ref={textInput}
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
          <div style={{ marginTop: "30px" }}>
            <input type="submit" value="Add" />
            <input
              style={{ marginLeft: "12px" }}
              type="button"
              className="muted-button"
              value="Cancel"
              onClick={() => {
                setIsAdding(false);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
