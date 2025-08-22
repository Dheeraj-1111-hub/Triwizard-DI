import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventPage from "./pages/Events"; // Detailed page for a single event

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page (with Events + ContactUs inside) */}
        <Route path="/" element={<Home />} />

        {/* Single Event Detail Page */}
        <Route path="/events/:id" element={<EventPage />} />

        {/* 404 Page */}
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
