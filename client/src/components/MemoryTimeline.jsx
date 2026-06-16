function MemoryTimeline() {
  const goal = localStorage.getItem("careerGoal") || "Not Set";
  const skills = localStorage.getItem("skills") || "Not Set";

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        🕒 Memory Timeline
      </h3>

      <ul className="space-y-2">
        <li>🎯 Goal Saved: {goal}</li>
        <li>🛠 Skills Saved: {skills}</li>
      </ul>
    </div>
  );
}

export default MemoryTimeline;