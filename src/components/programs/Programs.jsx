import React from "react";
import "./Programs.css";

const generateProgram = () => {
  console.log("Generating program...");
};

const Programs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Enter your information</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Height" />
      <input type="text" placeholder="Weight" />
      <input type="text" placeholder="Age" />
      <input type="text" placeholder="Gender" />
      <input type="text" placeholder="Experience" />
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={generateProgram}
      >
        Generate Program
      </button>
    </div>
  );
};

export default Programs;
