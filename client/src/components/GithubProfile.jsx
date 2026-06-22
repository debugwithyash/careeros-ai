import { useState } from "react";

function GithubProfile() {
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    const response = await fetch(
      "https://api.github.com/users/debugwithyash"
    );

    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-bold mb-3">
        🐙 GitHub Profile
      </h3>

      <button
        onClick={fetchProfile}
        className="bg-black px-4 py-2 rounded"
      >
        Load GitHub Profile
      </button>

      {user && (
        <div className="mt-4">
          <img
            src={user.avatar_url}
            alt="github"
            className="w-20 h-20 rounded-full"
          />

          <h4 className="text-xl font-bold mt-2">
            {user.name}
          </h4>

          <p>{user.bio}</p>

          <p>
            Repositories: {user.public_repos}
          </p>

          <p>
            Followers: {user.followers}
          </p>
        </div>
      )}
    </div>
  );
}

export default GithubProfile;