import React, { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    gender: "Male",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [preview, setPreview] = useState(user.profilePicture);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser({ ...user, profilePicture: preview });
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-violet-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center text-violet-800 mb-4">User Profile</h2>
        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer flex flex-col items-center">
            <img
              src={preview}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-violet-500 object-cover mx-auto"
            />
            {editing && (
              <>
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageUpload}
                />
                <span className="text-sm text-gray-600 mt-2">Click to change profile picture</span>
              </>
            )}
          </label>
        </div>

        <div className="mt-4 space-y-3 text-gray-700 w-full">
          <div className="flex justify-between border-b pb-2 w-full">
            <span className="font-semibold">Name:</span>
            {editing ? (
              <input
                name="name"
                type="text"
                value={user.name}
                onChange={handleInputChange}
                className="border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{user.name}</span>
            )}
          </div>
          <div className="flex justify-between border-b pb-2 w-full">
            <span className="font-semibold">Email:</span>
            {editing ? (
              <input
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputChange}
                className="border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{user.email}</span>
            )}
          </div>
          <div className="flex justify-between border-b pb-2 w-full">
            <span className="font-semibold">Phone Number:</span>
            {editing ? (
              <input
                name="phoneNumber"
                type="text"
                value={user.phoneNumber}
                onChange={handleInputChange}
                className="border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{user.phoneNumber}</span>
            )}
          </div>
          <div className="flex justify-between border-b pb-2 w-full">
            <span className="font-semibold">Gender:</span>
            {editing ? (
              <select
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                className="border-b border-gray-400 focus:outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span>{user.gender}</span>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-between w-full">
          {editing ? (
            <button
              className="w-full bg-violet-800 hover:bg-violet-700 text-white py-3 rounded-md shadow-md"
              onClick={handleSave}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="w-full bg-violet-800 hover:bg-violet-700 text-white py-3 rounded-md shadow-md"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
