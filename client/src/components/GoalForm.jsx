import { useState } from "react";

function GoalForm() {
  const [goal, setGoal] = useState("");

  const saveGoal = () => {
    localStorage.setItem("careerGoal", goal);
    alert("Goal Saved!");
  };

  return (
  <div
    id="career-goal"
    className="bg-slate-800 p-6 rounded-xl mb-6"
  >
      <h3 className="text-2xl font-bold mb-3">
        🎯 Career Goal
      </h3>

      <input
        type="text"
        placeholder="Frontend Developer"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="text-black p-2 rounded mr-2"
      />

      <button
        onClick={saveGoal}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Save Goal
      </button>
    </div>
  );
}

export default GoalForm;