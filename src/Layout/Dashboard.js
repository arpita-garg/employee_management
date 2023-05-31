import React, { useState } from "react";
import Swal from "sweetalert2";
import Add from "../Components/Add";
import Edit from "../Components/Edit";
import Employee_Data from "../Services/Employee_Data";
import Header from "../Components/Header";
import List from "../Components/List";

export default function Dashboard() {
  const [employees, setEmployees] = useState(Employee_Data);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {};
  const handleDelete = () => {};

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
