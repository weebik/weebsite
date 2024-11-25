import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes/routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
