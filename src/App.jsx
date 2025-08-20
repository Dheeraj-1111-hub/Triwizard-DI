import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./components/EventsSlide"; // Main events component
import EventPage from "./pages/Events"; // Detailed page for a single event

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Events List */}
        <Route path="/events" element={<Events />} />

        {/* Single Event Detail */}
        <Route path="/events/:id" element={<EventPage />} />

        {/* Optional: 404 Fallback */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-red-500 mt-20">Page Not Found</h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
