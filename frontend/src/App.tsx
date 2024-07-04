import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route path="/search" element={<>Search Page</>}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Router>
  );
};

export default App


