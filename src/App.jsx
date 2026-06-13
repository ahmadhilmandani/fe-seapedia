import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home";
import About from "./pages/About";
import './index.css'
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Router>
      <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
}