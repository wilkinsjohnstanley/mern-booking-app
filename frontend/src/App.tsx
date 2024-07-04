import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<span className="text-4xl">Home Page</span>}></Route>
        <Route path="/search" element={<>Search Page</>}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Router>
  );
};

export default App


