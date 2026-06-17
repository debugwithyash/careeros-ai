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
        
      </div>
      </div>
);
}

export default App;