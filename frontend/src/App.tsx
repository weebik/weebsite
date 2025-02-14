import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import routes from './routes/routes';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Navigate to="/lander" replace />} />
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
