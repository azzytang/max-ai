import React, { useState } from "react";
import "./Programs.css";

const Programs = () => {
  const [program, setProgram] = useState(null);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    squat1RM: "",
    bench1RM: "",
    deadlift1RM: "",
    experience: "",
    frequency: "",
    goals: "",
    injuries: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateProgram = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "age",
      "gender",
      "height",
      "weight",
      "squat1RM",
      "bench1RM",
      "deadlift1RM",
      "experience",
      "frequency",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) {
        alert(`Error: ${data.error}`);
        return;
      }
      setProgram(data.program);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate program. Please try again.");
    }
  };

  const renderProgram = () => {
    if (!program) return null;

    return (
      <div className="mt-6 p-4 bg-gray-950 rounded-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Your Training Program</h2>
        {program.map((week) => (
          <div key={week.week} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Week {week.week}</h3>
            {week.sessions.map((session, index) => (
              <div key={index} className="mb-4 p-3 bg-gray-900 rounded-md">
                <h4 className="font-semibold mb-2">Day {index + 1}</h4>

                <div className="mb-3">
                  <h5 className="font-medium">Main Lifts:</h5>
                  {session.main_lifts.map((lift, i) => (
                    <div key={i} className="ml-4">
                      {lift.lift}: {lift.sets} sets × {lift.reps} reps @{" "}
                      {lift.weight}kg
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="font-medium">Accessories:</h5>
                  <div className="ml-4">{session.accessories.join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 p-4">
      <h1 className="text-4xl font-bold mb-8">Training Information</h1>
      <form onSubmit={generateProgram} className="w-full max-w-md space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="number"
            placeholder="Age *"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <select
            className="border-2 border-gray-300 rounded-md p-2"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="number"
            placeholder="Height (cm) *"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            required
          />
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="number"
            placeholder="Weight (kg) *"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Current 1RMs (kg) *
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="number"
            placeholder="Squat"
            name="squat1RM"
            value={formData.squat1RM}
            onChange={handleInputChange}
            required
          />
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="number"
            placeholder="Bench"
            name="bench1RM"
            value={formData.bench1RM}
            onChange={handleInputChange}
            required
          />
          <input
            className="border-2 border-gray-300 rounded-md p-2"
            type="number"
            placeholder="Deadlift"
            name="deadlift1RM"
            value={formData.deadlift1RM}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-4">
          <select
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            required
          >
            <option value="">Training Experience *</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            name="frequency"
            value={formData.frequency}
            onChange={handleInputChange}
            required
          >
            <option value="">Training Frequency *</option>
            <option value="2">2 days/week</option>
            <option value="3">3 days/week</option>
            <option value="4">4 days/week</option>
            <option value="5">5 days/week</option>
            <option value="6">6 days/week</option>
          </select>

          <select
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
          >
            <option value="">Training Goals</option>
            <option value="strength">Strength</option>
            <option value="hypertrophy">Hypertrophy</option>
            <option value="peaking">Peaking for Meet</option>
          </select>

          <textarea
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            placeholder="Injuries or Limitations"
            name="injuries"
            value={formData.injuries}
            onChange={handleInputChange}
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full mt-6"
        >
          Generate Program
        </button>
      </form>

      {renderProgram()}
    </div>
  );
};

export default Programs;
