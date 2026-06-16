import { useState } from "react";

function SkillsMemory() {
  const [skills, setSkills] = useState("");

  const saveSkills = () => {
    localStorage.setItem("skills", skills);
    alert("Skills Saved!");
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        🛠 Skills Memory
      </h3>

      <input
        type="text"
        placeholder="React, Node.js, Tailwind"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="text-black p-2 rounded mr-2"
      />

      <button
        onClick={saveSkills}
        className="bg-green-600 px-4 py-2 rounded"
      >
        Save Skills
      </button>
    </div>
  );
}

export default SkillsMemory;