import { useState } from "react";

function JobMatcher() {
  const [jobDesc, setJobDesc] = useState("");
  const [score, setScore] = useState(null);
  const [missing, setMissing] = useState([]);

  const matchJob = () => {
    const savedSkills =
      localStorage.getItem("userSkills") || "";

    const userSkills = savedSkills
      .toLowerCase()
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    let matched = 0;
    const missingSkills = [];

    userSkills.forEach((skill) => {
      if (jobDesc.toLowerCase().includes(skill)) {
        matched++;
      } else {
        missingSkills.push(skill);
      }
    });

    const result =
      userSkills.length > 0
        ? Math.round(
            (matched / userSkills.length) * 100
          )
        : 0;

    setScore(result);
    setMissing(missingSkills);
  };

  return (
   <div
  id="job-matcher"
  className="bg-slate-800 p-6 rounded-xl mb-6"
>
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

      {score !== null && (
        <div className="mt-4">
          <h4 className="text-xl font-bold">
            Match Score: {score}%
          </h4>

          {missing.length > 0 && (
            <>
              <div className="mt-3">
                <h4 className="font-bold">
                  Missing Skills:
                </h4>

                <ul>
                  {missing.map((skill, index) => (
                    <li key={index}>
                      ❌ {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 bg-slate-900 p-3 rounded-lg">
                <h4 className="font-bold text-green-400">
                  Recommendation:
                </h4>

                <p>
                  Learn{" "}
                  {missing.join(", ")} to improve
                  your chances for this role.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default JobMatcher;