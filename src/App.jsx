import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import BusinessTravelValidationSystem from './pages/BusinessTravelValidationSystem';
import GraduationProjectsManager from './pages/GraduationProjectsManager';
import CourtOfAppealsManager from './pages/CourtOfAppealsManager';
import TravelAgencyLandingPage from './pages/TravelAgencyLandingPage';
import OnlineCoursesPlatform from './pages/OnlineCoursesPlatform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Projects */}
        <Route
          path="/online-courses-platform"
          element={<OnlineCoursesPlatform />}
        />
        <Route
          path="/business-travel-validation-system"
          element={<BusinessTravelValidationSystem />}
        />
        <Route
          path="/graduation-projects-manager"
          element={<GraduationProjectsManager />}
        />
        <Route
          path="/court-of-appeals-ressources-manager"
          element={<CourtOfAppealsManager />}
        />
        <Route
          path="/travel-agency-landingpage"
          element={<TravelAgencyLandingPage />}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
