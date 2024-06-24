import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import videoSrc from '../images/OlivarezCollege.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/tailwind.config';

const FacultyLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [departmentLevel, setDepartmentLevel] = useState("department");
  const [attempts, setAttempts] = useState(3);
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (attempts === 0) {
      setCountdown(10);
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        setAttempts(3); // Reset attempts after countdown
      }, 10000);
    }
  }, [attempts]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (attempts > 0) {
      if (username && password) {
        navigate("/faculty-dashboard");
      } else {
        console.log("Please enter username and password");
      }
      setAttempts(attempts - 1);
    } else {
      console.log("Too many attempts. Please wait.");
    }
  }

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video id="video-background" className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
      <div className="relative z-10 p-10 bg-white bg-opacity-70 rounded-lg shadow-2xl max-w-md w-full">
        <div className="branding mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">OLIVAREZ UNIVERSITY FACULTY LOGIN</h1>
        </div>
        {countdown !== null && (
          <div className="text-red-500 mb-4">
            Too many attempts. Please wait {countdown} seconds.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              <i className="fas fa-user mr-2"></i> LastName And First Letter Of Your Name.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              id="username"
              type="text"
              placeholder="ENTER USERNAME"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={attempts === 0}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
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
              disabled={attempts === 0}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="education-level"
            >
              <i className="fas fa-graduation-cap mr-2"></i> Faculty Department
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-center"
              id="education-level"
              value={departmentLevel}
              onChange={(e) => setDepartmentLevel(e.target.value)}
              disabled={attempts === 0}
            >
              <option value="department1">Department 1</option>
              <option value="department2">Department 2</option>
            </select>
          </div>

          <div className="flex items-center justify-center mb-6">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300"
              type="submit"
              disabled={attempts === 0}
            >
              Login
            </button>
          </div>
          
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div id="error-message" className="text-red-500 mt-4"></div>
      </div>
    </div>
  );
}

export default FacultyLogin;
