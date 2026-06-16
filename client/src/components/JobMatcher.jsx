import { useState } from "react";

function JobMatcher() {
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState("");

  const matchJob = () => {
    setResult(`
Match Score: 85%

Missing Skills:
• TypeScript
• Next.js
• GitHub Actions

Recommended Next Step:
Learn TypeScript and Next.js
    `);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        💼 Job Matcher
      </h3>

      <textarea
        rows="5"
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
        placeholder="Paste Job Description..."
        className="w-full text-black p-2 rounded"
      />

      <button
        onClick={matchJob}
        className="bg-purple-600 px-4 py-2 rounded mt-3"
      >
        Match Job
      </button>

      <pre className="mt-4 whitespace-pre-wrap">
        {result}
      </pre>
    </div>
  );
}

export default JobMatcher;