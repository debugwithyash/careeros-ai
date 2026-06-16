import { useState } from "react";

function ResumeUpload() {
  const [result, setResult] = useState("");

  const analyzeResume = () => {
    setResult(`
Resume Score: 82/100

Skills Found:
• HTML
• CSS
• JavaScript
• React
    `);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        📄 Resume Upload
      </h3>

      <input type="file" />

      <button
        onClick={analyzeResume}
        className="bg-blue-600 px-4 py-2 rounded ml-2"
      >
        Analyze Resume
      </button>

      <pre className="mt-4 whitespace-pre-wrap">
        {result}
      </pre>
    </div>
  );
}

export default ResumeUpload;