import { useState } from "react";

function AIAssistant() {
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    const goal = localStorage.getItem("careerGoal");

    setAnswer(
      `Based on your goal (${goal}), focus on React, TypeScript and Next.js.`
    );
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        🤖 AI Assistant
      </h3>

      <button
        onClick={askAI}
        className="bg-purple-600 px-4 py-2 rounded"
      >
        Get Advice
      </button>

      <p className="mt-4">{answer}</p>
    </div>
  );
}

export default AIAssistant;