import AIAssistant from "./components/AIAssistant";
import MemoryTimeline from "./components/MemoryTimeline";
import CareerAdvisor from "./components/CareerAdvisor";
import JobMatcher from "./components/JobMatcher";
import ResumeUpload from "./components/ResumeUpload";
import SkillsMemory from "./components/SkillsMemory";
import GoalForm from "./components/GoalForm";
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold mb-8">🚀 CareerOS AI</h1>

        <ul className="space-y-4">
          <li>🏠 Dashboard</li>
          <li>🧠 Memory</li>
          <li>💼 Jobs</li>
          <li>📄 Resume</li>
          <li>🎤 Interview Prep</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h2 className="text-4xl font-bold mb-6">
          Welcome Back, Yash 👋
        </h2>
<GoalForm />
<SkillsMemory />
<ResumeUpload />
<JobMatcher />
<CareerAdvisor />
<MemoryTimeline />
<AIAssistant />
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-gray-400">Applications</h3>
            <p className="text-3xl font-bold">12</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-gray-400">Match Score</h3>
            <p className="text-3xl font-bold">82%</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-gray-400">Skills</h3>
            <p className="text-3xl font-bold">7</p>
          </div>

        </div>

        {/* Career Memory */}
        <div className="bg-slate-800 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold mb-3">
            🧠 Career Memory
          </h3>

          <p>Goal: Frontend Developer</p>
          <p>Known Skills: HTML, CSS, JavaScript</p>
          <p>Learning: React.js</p>
        </div>

        {/* Skill Gap */}
        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3">
            📈 Skill Gap Analysis
          </h3>

          <ul>
            <li>❌ TypeScript</li>
            <li>❌ Next.js</li>
            <li>❌ GitHub Actions</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App