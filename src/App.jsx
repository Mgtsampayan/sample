import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
// import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import ComingSoon from './components/ComingsoonVideo'
import ForgotPassword from './components/ForgotPassword'
import LandingPage from './components/LandingPage';
import StudentLogin from './components/StudentLogin';
import StudentDashboard from './pages/StudentDashboard';
import FacultyLogin from './components/FacultyLogin';
import FacultyDashboard from './pages/FacultyDashboard';
import RegistrarDashboard from './pages/RegistrarDashboard';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/registrar-dashboard" element={<RegistrarDashboard />} />
      </Routes>
    </>
  );
}

export default App;
