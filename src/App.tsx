import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EpisodesList from "./pages/List/components/EpisodesList";
import EpisodeDetail from "./pages/Detail/components/EpisodeDetail";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "bootstrap/dist/css/bootstrap-grid.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EpisodesList />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
