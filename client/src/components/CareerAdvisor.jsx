import { useState } from "react";

function CareerAdvisor() {
  const [advice, setAdvice] = useState("");

  const generateAdvice = async () => {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    const goal =
      localStorage.getItem("careerGoal") ||
      "Frontend Developer";

    const skills =
      localStorage.getItem("userSkills") ||
      "HTML,CSS,JavaScript";

    try {
      setAdvice("Generating AI advice...");

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
         model: "openai/gpt-oss-20b:free",
            messages: [
              {
                role: "user",
                content: `My career goal is ${goal}. My current skills are ${skills}. Give me a detailed roadmap, projects to build, internship suggestions, and next skills to learn.`,
              },
            ],
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.error) {
        setAdvice(`ERROR: ${data.error.message}`);
      } else {
        setAdvice(
          data.choices?.[0]?.message?.content ||
            "No advice generated"
        );
      }
    } catch (error) {
      console.log(error);
      setAdvice("Error generating AI advice");
    }
  };

  return (
    <div
      id="career-advisor"
      className="bg-slate-800 p-6 rounded-xl mb-6"
    >
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