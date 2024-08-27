import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";


const App = () => {

  return (
    <Router>
      <Routes>
        {/* homepage */}
        <Route 
        path="/" 
        element={
          <Layout>
          <p>Home Page</p>
        </Layout>
        }
        />
      {/* search page */}
        <Route 
        path="/search" 
        element={
          <Layout>
          <p>Search Page</p>
        </Layout>
        }
        />
        {/* registration page */}
        <Route
          path="/register"
          element={
            <Layout>
              <Register></Register>
            </Layout>
          }
        />
        
  
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
};

export default App;


