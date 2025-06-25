import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ProjectDetail from './pages/ProjectDetail';
import MintingPage from './pages/MintingPage';
import AuctionPage from './pages/AuctionPage';
import ContributorPortal from './pages/ContributorPortal';
import GatingSettings from './pages/GatingSettings';
import DAOGovernance from './pages/DAOGovernance';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import NotificationsPage from './pages/NotificationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="mint" element={<MintingPage />} />
          <Route path="auctions" element={<AuctionPage />} />
          <Route path="contributors" element={<ContributorPortal />} />
          <Route path="gating/:id" element={<GatingSettings />} />
          <Route path="dao" element={<DAOGovernance />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;