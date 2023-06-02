import React, { useState } from "react";
import Add from "../Components/Add";
import Edit from "../Components/Edit";
import Employee_Data from "../Services/Employee_Data";
import Header from "../Components/Header";
import List from "../Components/List";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [employees, setEmployees] = useState(Employee_Data);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const[employee]= employees.filter(employee => employee.id === id);
    setSelectedEmployee(employee)
    setIsEditing(true)
  };
  const handleDelete = (id) => {
    // console.log("id-delete",id)
    Swal.fire({
      icon: "warning",
      title: "Are your sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        // console.log("id-delete", id);
        //  console.log("employees",employees);

        const [employee] = employees.filter((employee) => employee.id === id);

        // console.log("employee", employee);
        // console.log("employees-after-id", employee.id);

        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted`,
          showConfirmButton: false,
          timer: 1500
        });

        setEmployees(employees.filter(employee => employee.id !== id));
        // console.log("employees", employees);
        // console.log("employee", employee);
              // console.log("id-delete", id);
      }
    });
  };

  return (
    <>
      <div className="container">
        {/*********** LIST ***************/}

        {!isAdding && !isEditing && (
          <>
            <Header setIsAdding={setIsAdding} />
            <List
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}

        {/************** ADD *************/}

        {isAdding && (
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )}

        {/************* EDIT ***************/}

        {isEditing && (
          <Edit
            selectedEmployee={selectedEmployee}
            employees={employees}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </>
  );
}
