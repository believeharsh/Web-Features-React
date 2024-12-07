import React from 'react';

const User = ({ user }) => {
  if (!user) {
    return <p>No user data available.</p>;
  }

  const {
    id,
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
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="flex items-center">
        <img
          src={avatar_url}
          alt={`${login}'s avatar`}
          className="w-24 h-24 rounded-full border-2 border-gray-200"
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold">{name || login}</h1>
          <p className="text-gray-600">@{login}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{bio || "No bio available"}</p>
      <div className="mt-4">
        <p><strong>ID:</strong> {id}</p>
        {company && <p><strong>Company:</strong> {company}</p>}
        {blog && (
          <p>
            <strong>Blog:</strong> <a href={blog} className="text-blue-600">{blog}</a>
          </p>
        )}
        {location && <p><strong>Location:</strong> {location}</p>}
        {email && <p><strong>Email:</strong> {email}</p>}
        {twitter_username && (
          <p>
            <strong>Twitter:</strong>{" "}
            <a href={`https://twitter.com/${twitter_username}`} className="text-blue-600">
              @{twitter_username}
            </a>
          </p>
        )}
        <p><strong>Public Repos:</strong> {public_repos}</p>
        <p><strong>Followers:</strong> {followers}</p>
        <p><strong>Following:</strong> {following}</p>
        <p><strong>Account Created:</strong> {new Date(created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default User;
