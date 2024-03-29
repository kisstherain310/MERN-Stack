import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import NotFoundPage from "./components/NotFoundPage";
import Register from "./components/Register";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/login" element = {<Login /> }/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={ <Main />} />
          <Route exact path="*" element={ <Navigate to ="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
