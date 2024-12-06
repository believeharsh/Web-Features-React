const User = ({ user }) => {
    const {
      avatar_url,
      name,
      login,
      bio,
      company,
      blog,
      location,
      email,
      twitter_username,
      public_repos,
      followers,
      following,
      created_at,
    } = user;
  
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex flex-col items-center space-y-4 mb-6">
          <img
            src={avatar_url}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
          <h2 className="text-2xl font-bold text-white">{name || login}</h2>
          <p className="text-gray-200 text-center">{bio || "No bio available"}</p>
        </div>
  
        <div className="flex flex-wrap justify-center items-center gap-6 text-white">
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Username</h3>
            <p>{login}</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Company</h3>
            <p>{company || "Not specified"}</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Blog</h3>
            <a
              href={blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 underline"
            >
              {blog || "Not specified"}
            </a>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Location</h3>
            <p>{location || "Not specified"}</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Email</h3>
            <p>{email || "Not specified"}</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Twitter</h3>
            <a
              href={`https://twitter.com/${twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 underline"
            >
              {twitter_username || "Not specified"}
            </a>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Repositories</h3>
            <p>{public_repos}</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Followers</h3>
            <p>{followers}</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Following</h3>
            <p>{following}</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
            <h3 className="font-semibold">Joined</h3>
            <p>{new Date(created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default User;
  