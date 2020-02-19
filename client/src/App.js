import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CheckIn from "./pages/checkIn";

function App() {
  return (
    <Router>
      <Route path="/checkin" component={CheckIn} />
    </Router>
  );
}

export default App;
