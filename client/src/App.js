import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/home'; 
import Main from './components/main';
import PrivateRoute from './components/privateRoute';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        
        <nav className="navbar">
          <Link to="/" className="logo-link">
            <h2 className="logo">Smart City</h2>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route
          path="/main"
          element={
          <PrivateRoute>
          <Main />
          </PrivateRoute>
          }
/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;