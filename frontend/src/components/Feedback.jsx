import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RatingInput from "./RatingInput";

export default function Feedback() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usageFrequency: "",
    userExperienceRating: null,
    message: "",
  });
  const [feedbackList, setFeedbackList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedFeedback =
      JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbackList(storedFeedback);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.usageFrequency ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    const updatedFeedbackList = [...feedbackList, formData];
    setFeedbackList(updatedFeedbackList);

    localStorage.setItem("feedbackList", JSON.stringify(updatedFeedbackList));

    navigate('/thankyou', { state: { feedback: [formData] } });

    setFormData({
      name: "",
      email: "",
      usageFrequency: "",
      userExperienceRating: null,
      message: "",
    });
  };

  return (
    <div className="fixed h-[100vh] w-[100vw] bg-violet-200 flex justify-center items-center">
      <div className="w-[90vw] mt-8 mb-8 max-w-4xl p-6 bg-violet-100 text-white rounded-lg border border-gray-800">
        <h2 className="text-3xl font-bold text-center text-violet-950 mb-6">
          Fitness Tracker Feedback
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-violet-900">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-violet-900">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-violet-900">
              How often do you use our fitness tracker?
            </label>
            <select
              value={formData.usageFrequency}
              onChange={(e) =>
                handleSelectChange("usageFrequency")(e.target.value)
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
              required
            >
              <option value="" disabled>
                Select usage frequency
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Several times a week</option>
              <option value="monthly">A few times a month</option>
              <option value="rarely">Rarely</option>
            </select>
          </div>
          <RatingInput
            label="How would you rate your overall experience with our app?"
            value={formData.userExperienceRating}
            onChange={handleSelectChange("userExperienceRating")}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-violet-900">
              Your Feedback
            </label>
            <textarea
              name="message"
              placeholder="We appreciate your feedback! Let us know how we can improve."
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-800 text-violet-100 font-semibold py-3 rounded-md hover:bg-violet-700 transition duration-200"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
