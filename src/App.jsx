import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home/Index.jsx";
import About from "./pages/About";
import ProductIndex from "./pages/Product/Index.jsx";

import './index.css'
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Router>
      <Route component={MainLayout}>
        <Route path="/home" component={Home} />
        <Route path="/product" component={ProductIndex} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
}