import { useState } from "react";

function CareerMemory() {
  const [goal] = useState(
    localStorage.getItem("careerGoal") || "Not Set"
  );

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        🧠 Career Memory
      </h3>

     <p>Goal: {goal}</p>
<p>Known Skills: {localStorage.getItem("skills") || "Not Set"}</p>
      <p>Learning: React.js</p>
    </div>
  );
}

export default CareerMemory;