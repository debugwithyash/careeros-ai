import { useState } from "react";

function CareerAdvisor() {
  const [advice, setAdvice] = useState("");

  const generateAdvice = () => {
    const goal = localStorage.getItem("careerGoal") || "Developer";

    setAdvice(`
Career Goal: ${goal}

Recommended Learning Path:
• React
• TypeScript
• Next.js

Suggested Project:
Build a SaaS Dashboard

Estimated Time:
3 Months
    `);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        🤖 AI Career Advisor
      </h3>

      <button
        onClick={generateAdvice}
        className="bg-indigo-600 px-4 py-2 rounded"
      >
        Generate Advice
      </button>

      <pre className="mt-4 whitespace-pre-wrap">
        {advice}
      </pre>
    </div>
  );
}

export default CareerAdvisor;