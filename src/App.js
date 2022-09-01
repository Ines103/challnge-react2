import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import AddFeatures from './components/pages/AddFeatures';
import ErrorPage from './components/pages/ErrorPage';
import Features from './components/pages/Features';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import UpdateFeatures from './components/pages/UpdateFeatures';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          < Route path="/" element = {<Login />} />
          <Route path="/login" element= {<Login /> } /> 
          <Route path="/register" element= {<Register /> } /> 
          <Route path="/features" element= {<Features /> } /> 
          <Route path="/features/create" element= {<AddFeatures /> } /> 
          <Route path="/features/update/:id" element= {<UpdateFeatures /> } /> 
          <Route path="*" element= {<ErrorPage /> } /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
