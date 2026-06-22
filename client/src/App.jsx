import { useEffect, useState } from "react";
import GithubProfile from "./components/GithubProfile";
import AIAssistant from "./components/AIAssistant";
import MemoryTimeline from "./components/MemoryTimeline";
import CareerAdvisor from "./components/CareerAdvisor";
import JobMatcher from "./components/JobMatcher";
import ResumeUpload from "./components/ResumeUpload";
import SkillsMemory from "./components/SkillsMemory";
import GoalForm from "./components/GoalForm";
function App() {
  const [careerScore, setCareerScore] = useState(0);
  const [goalCount, setGoalCount] = useState(0);
const [skillCount, setSkillCount] = useState(0);
useEffect(() => {
  const goal = localStorage.getItem("careerGoal");
  const skills = localStorage.getItem("userSkills");

  if (goal) {
    setGoalCount(1);
  }

  if (skills) {
    const skillsArray = skills.split(",");
    setSkillCount(skillsArray.length);
  }

  let score = 0;

  if (goal) score += 30;
  if (skills) score += 30;

  score += 40;

  setCareerScore(score);
}, []);
  
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 p-6">
     <h1 className="text-4xl font-bold">
  CareerOS AI
</h1>
        <p className="text-slate-400 mb-6">
  Your Personal AI Career Growth Assistant
</p>
<ul className="space-y-4">

  <li
    className="cursor-pointer hover:text-purple-400"
    onClick={() =>
      document
        .getElementById("career-goal")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  >
    🎯 Career Goal
  </li>

  <li
    className="cursor-pointer hover:text-purple-400"
    onClick={() =>
      document
        .getElementById("skills-memory")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  >
    🧠 Skills Memory
  </li>

  <li
    className="cursor-pointer hover:text-purple-400"
    onClick={() =>
      document
        .getElementById("resume-upload")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  >
    📄 Resume Analyzer
  </li>

  <li
    className="cursor-pointer hover:text-purple-400"
    onClick={() =>
      document
        .getElementById("job-matcher")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  >
    💼 Job Matcher
  </li>

  <li
    className="cursor-pointer hover:text-purple-400"
    onClick={() =>
      document
        .getElementById("career-advisor")
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  >
    🤖 AI Career Advisor
  </li>

</ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h2 className="text-4xl font-bold mb-6">
          Welcome Back, Yash 👋
        </h2>
        <p className="text-slate-400 mb-8">
  Ready to accelerate your career journey with AI-powered insights.
</p>

<div className="grid grid-cols-5 gap-4 mb-8">
  <div className="bg-slate-800 p-4 rounded-xl">
    <p className="text-sm text-slate-400">Career Goals</p>
    <h3 className="text-2xl font-bold">{goalCount}</h3>
  </div>

  <div className="bg-slate-800 p-4 rounded-xl">
    <p className="text-sm text-slate-400">Skills Tracked</p>
    <h3 className="text-2xl font-bold">{skillCount}</h3>
  </div>

  <div className="bg-slate-800 p-4 rounded-xl">
    <p className="text-sm text-slate-400">Resume Analyzed</p>
    <h3 className="text-2xl font-bold">1</h3>
  </div>

  <div className="bg-slate-800 p-4 rounded-xl">
    <p className="text-sm text-slate-400">Job Matches</p>
    <h3 className="text-2xl font-bold">3</h3>
  </div>

  <div className="bg-slate-800 p-4 rounded-xl">
    <p className="text-sm text-slate-400">Career Score</p>
    <h3 className="text-2xl font-bold">{careerScore}</h3>
  </div>
</div>
<div className="grid grid-cols-4 gap-4 mb-8">
<div
  onClick={() =>
    document
      .getElementById("career-goal")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 hover:scale-105 cursor-pointer transition"
>
  <h3 className="font-bold">🎯 Set Career Goal</h3>
  <p className="text-sm text-slate-400">
    Define your career path
  </p>
</div>
  <div
  onClick={() =>
    document
      .getElementById("skills-memory")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 hover:scale-105 cursor-pointer transition"
>
  <h3 className="font-bold">🧠 Add Skills</h3>
  <p className="text-sm text-slate-400">
    Track your skills
  </p>
</div>
  <div
  onClick={() =>
    document
      .getElementById("resume-upload")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 hover:scale-105 cursor-pointer transition"
>
  <h3 className="font-bold">📄 Analyze Resume</h3>
  <p className="text-sm text-slate-400">
    AI-powered resume insights
  </p>
</div>

  <div
  onClick={() =>
    document
      .getElementById("job-matcher")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 hover:scale-105 cursor-pointer transition"
>
    <h3 className="font-bold">💼 Match Jobs</h3>
    <p className="text-sm text-slate-400">
      Find matching opportunities
    </p>
  </div>
</div>
<div className="bg-slate-800 p-6 rounded-xl mb-8">
  <h3 className="text-xl font-bold mb-4">
    📈 Career Progress Overview
  </h3>

  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-6xl font-bold text-purple-400">
      {careerScore}%
      </h1>

      <p className="text-slate-400 mt-2">
        Overall Career Readiness
      </p>
    </div>

    <div className="w-64">
      <div className="mb-3">
        <p className="text-sm">Skills Development</p>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-[80%]"></div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm">Goal Progress</p>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
        </div>
      </div>

      <div>
        <p className="text-sm">Interview Readiness</p>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full w-[65%]"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<GoalForm />
<SkillsMemory />
<ResumeUpload />
<JobMatcher />
<GithubProfile />
<CareerAdvisor />
<MemoryTimeline />
<AIAssistant />

<footer className="mt-10 bg-slate-900 p-6 rounded-xl text-center">
  <h3 className="font-bold text-xl">
    CareerOS AI
  </h3>

  <p className="text-slate-400 mt-2">
    Built by Yash Chaudhary
  </p>

  <p className="text-slate-400">
    chaudharyyash0055@gmail.com
  </p>

  <a
    href="https://digitalheroesco.com"
    target="_blank"
    rel="noreferrer"
    className="inline-block mt-4 px-4 py-2 bg-purple-600 rounded-lg"
  >
    Built for Digital Heroes
  </a>
</footer>

</div>
</div>
);
}

export default App;