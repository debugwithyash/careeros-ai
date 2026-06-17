import { useState } from "react";

function CareerAdvisor() {
  const [advice, setAdvice] = useState("");

  const generateAdvice = () => {
    const goal =
      localStorage.getItem("careerGoal") || "";

    const skills =
      localStorage.getItem("userSkills") || "";

    let roadmap = "";

    if (goal.toLowerCase().includes("frontend")) {
      roadmap = `
🚀 Frontend Developer Roadmap

Current Skills:
${skills}

Next Skills To Learn:
• TypeScript
• Next.js
• GitHub
• APIs

Projects To Build:
1. Portfolio Website
2. Expense Tracker
3. Job Portal
4. AI Dashboard

Internship Target:
Frontend Developer Intern

Estimated Time:
2-3 Months
`;
    } else if (goal.toLowerCase().includes("ai")) {
      roadmap = `
🤖 AI Engineer Roadmap

Current Skills:
${skills}

Next Skills To Learn:
• Python
• NumPy
• Pandas
• Machine Learning
• Deep Learning

Projects To Build:
1. Resume Analyzer
2. Chatbot
3. Career Recommendation System

Internship Target:
AI/ML Intern

Estimated Time:
3-4 Months
`;
    } else {
      roadmap = `
🎯 Career Goal:
${goal}

Current Skills:
${skills}

Keep learning and building projects.
`;
    }

    setAdvice(roadmap);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        🤖 AI Career Advisor
      </h3>

      <button
        onClick={generateAdvice}
        className="bg-cyan-600 px-4 py-2 rounded"
      >
        Generate Advice
      </button>

      {advice && (
        <pre className="mt-4 whitespace-pre-wrap">
          {advice}
        </pre>
      )}
    </div>
  );
}

export default CareerAdvisor;      