import { useState, useEffect } from "react";
import User from "./User";

const GithubProfileFinder = () => {
    const [userName, setUserName] = useState("believeharsh");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const handleSubmit = () => {
      if (userName.trim() === "") {
        setError("Please enter a username!");
        return;
      }
      setError("");
      fetchGithubUserData();
    };
  
    const fetchGithubUserData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        if (!res.ok) {
          throw new Error("User not found");
        }
        const data = await res.json();
        setUserData(data);
        setUserName("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchGithubUserData();
    }, []);
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            GitHub Profile Finder
          </h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
          {loading && (
            <p className="text-center text-blue-600 font-medium">
              Loading user data...
            </p>
          )}
          {userData && (
            <div className="mt-6">
              <User user={userData} />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default GithubProfileFinder;
  