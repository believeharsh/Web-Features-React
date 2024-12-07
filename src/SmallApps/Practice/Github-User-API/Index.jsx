import { useEffect, useState } from "react";
import User from "./UserProfileCard";

const GithubProfileFinder = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("believeharsh");

  const handleSubmit = () => {
    if (userName.trim()) {
      GetUserProfile();
    }
    else {return <p>first give input then hit submit button</p>}
  };

  const GetUserProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        throw new Error(`User ${userName} not found`);
      }
      const result = await response.json();
      setUserData(result);
      setUserName("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetUserProfile();
  }, []);
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Enter GitHub username"
          className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="">
          <User user={userData} />
        </div>
      )}
    </div>
  );
};

export default GithubProfileFinder;
