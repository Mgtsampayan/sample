import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
// import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import ComingSoon from './components/ComingsoonVideo';
import ForgotPassword from './components/ForgotPassword';
import LandingPage from './components/LandingPage';
import StudentLogin from './components/StudentLogin';
import StudentDashboard from './pages/StudentDashboard';
import FacultyLogin from './components/FacultyLogin';
import FacultyDashboard from './pages/FacultyDashboard';
import RegistrarDashboard from './pages/RegistrarDashboard';

// Import new components
import StudentList from './components/Registrar/StudentList';
import DocumentUpload from './components/Registrar/DocumentUpload';
import RegistrarNotifications from './components/Registrar/Notifications';
import TrackingDocument from './components/Registrar/TrackingDocument';
import Profile from './components/StudentPortal/Profile';
import OnlineDocumentRequest from './components/StudentPortal/OnlineDocumentRequest';
import Ledger from './components/StudentPortal/Ledger';
import Schedule from './components/StudentPortal/Schedule';
import ScholasticRecord from './components/StudentPortal/ScholasticRecord';
import OnlinePayment from './components/StudentPortal/OnlinePayment';
import UploadedDocuments from './components/StudentPortal/UploadedDocuments';
import CurrentGrades from './components/StudentPortal/CurrentGrades';
import PaymentVerification from './components/Accounting/PaymentVerification';
import AccountingNotifications from './components/Accounting/Notifications';
import DocumentVerification from './components/Faculty/DocumentVerification';
import FacultyNotifications from './components/Faculty/Notifications';

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

        {/* New Routes */}
        <Route path="/registrar/students" element={<StudentList />} />
        <Route path="/registrar/upload" element={<DocumentUpload />} />
        <Route path="/registrar/notifications" element={<RegistrarNotifications />} />
        <Route path="/registrar/tracking" element={<TrackingDocument />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/document-request" element={<OnlineDocumentRequest />} />
        <Route path="/student/ledger" element={<Ledger />} />
        <Route path="/student/schedule" element={<Schedule />} />
        <Route path="/student/scholastic-record" element={<ScholasticRecord />} />
        <Route path="/student/online-payment" element={<OnlinePayment />} />
        <Route path="/student/uploaded-documents" element={<UploadedDocuments />} />
        <Route path="/student/current-grades" element={<CurrentGrades />} />
        <Route path="/accounting/payment-verification" element={<PaymentVerification />} />
        <Route path="/accounting/notifications" element={<AccountingNotifications />} />
        <Route path="/faculty/document-verification" element={<DocumentVerification />} />
        <Route path="/faculty/notifications" element={<FacultyNotifications />} />
      </Routes>
    </>
  );
}

export default App;

