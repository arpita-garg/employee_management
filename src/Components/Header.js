import React from "react";

export default function Header({ setIsAdding }) {
  return (
    <>
      <header>
        <h1>Employeement Management Software</h1>
        <div className="header-btn">
          <button onClick={() => setIsAdding(true)} className="round-button">
            Add Button
          </button>
        </div>
      </header>
    </>
  );
}
