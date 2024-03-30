import { useCallback, useEffect, useReducer } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'; 
import AppReducer from './reducers/AppReducer';
import AppContext from "./components/AppContext";
import axios from "axios";
function App() {
  const initialState = {
    user: null,
    posts: []
  }
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const checkCurrentUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const option = {
        method: "get",
        url: "api/v1/auth/",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const response = await axios(option);
      if(response.data.data.user){
        const {userName} = response.data.data.user;
        dispatch({type: "CURRENT_USER", payload: {userName}});
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    checkCurrentUser()
  }, [checkCurrentUser]);
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
