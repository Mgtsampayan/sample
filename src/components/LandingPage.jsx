import "../css/effect.css";
import { useNavigate } from 'react-router-dom';
import studentImg from '../images/student.png';
import facultyImg from '../images/faculty.png';
import adminImg from '../images/admin.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* <h1 className="text-4xl font-bold mb-8 text-white">WELCOME EVERYONE</h1> */}
      <div className="grid-container">
        <div className="tooltip-container" onClick={() => navigate('/student-login')}>
          <img 
            src={studentImg} 
            alt="Student" 
          />
          <div className="tooltip-text">Student</div>
        </div>
        <div className="tooltip-container" onClick={() => navigate('/faculty-dashboard')}>
          <img 
            src={facultyImg} 
            alt="Faculty" 
          />
          <div className="tooltip-text">Faculty</div>
        </div>
        <div className="tooltip-container" onClick={() => navigate('/dashboard')}>
          <img 
            src={adminImg} 
            alt="Admin" 
          />
          <div className="tooltip-text">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;