import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const routes = [
  { path: "/lander", Component: LandingPage },
  { path: "/home", Component: Home },
  { path: "/about-me", Component: AboutMe },
  { path: "/portfolio", Component: Portfolio },
  { path: "/contact", Component: Contact },
];

export default routes;
