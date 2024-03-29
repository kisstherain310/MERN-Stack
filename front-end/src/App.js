import { useReducer } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'; 
import AppReducer from './reducers/AppReducer';
import AppContext from "./components/AppContext";
function App() {
  const initialState = {
    user: null,
    posts: []
  }
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Router>
      <AppContext.Provider value={{state, dispatch}}>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/login" element = {<Login /> }/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={ <Main />} />
          <Route exact path="*" element={ <Navigate to ="/" />} />
        </Routes>
      </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
