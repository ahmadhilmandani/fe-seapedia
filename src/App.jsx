import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home/Index.jsx";
import About from "./pages/About";
import ProductIndex from "./pages/Product/Index.jsx";
import SignUpIndex from "./pages/Auth/SignUp/Index.jsx";
import SignInIndex from "./pages/Auth/SIgnIn/SignInIndex.jsx";
import ProfileIndex from "./pages/Profile/Index.jsx"

import './index.css'
import MainLayout from "./layouts/MainLayout";
import { AuthProvider } from "./stores/auth/auth-context.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Route component={MainLayout}>
          <Route path="/home" component={Home} />
          <Route path="/product" component={ProductIndex} />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={SignInIndex} />
          <Route path="/sign-up" component={SignUpIndex} />
          <Route path="/profile/:username" component={ProfileIndex} />
        </Route>
      </Router>
    </AuthProvider>
  );
}