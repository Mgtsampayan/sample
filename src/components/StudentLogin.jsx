import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import videoSrc from "../images/OlivarezCollege.mp4";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/tailwind.config";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [educationLevel, setEducationLevel] = useState("college");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      navigate("/student-dashboard");
    } else {
      console.log("Please enter username and password");
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        id="video-background"
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
      <div className="relative z-10 p-10 bg-white bg-opacity-70 rounded-lg shadow-2xl max-w-md w-full">
        <div className="branding mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            OLIVAREZ UNIVERSITY LOGIN PORTAL
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              <i className="fas fa-user mr-2"></i> STUDENT NUMBER
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              id="username"
              type="text"
              placeholder="STUDENT NUMBER"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              <i className="fas fa-lock mr-2"></i> Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              id="password"
              type="password"
              placeholder="ENTER PASSWORD"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="education-level"
            >
              <i className="fas fa-graduation-cap mr-2"></i> Education Level
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-center"
              id="education-level"
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
            >
              <option value="college">College</option>
              <option value="senior-high-school">Senior High School</option>
            </select>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300 mb-4"
              type="submit"
            >
              Login
            </button>
            <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700">
              Forgot Password?
            </Link>
          </div>
        </form>
        <div id="error-message" className="text-red-500 mt-4"></div>
      </div>
    </div>
  );
};

export default StudentLogin;
