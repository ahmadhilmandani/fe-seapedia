import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home";
import About from "./pages/About";
import './index.css'

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}