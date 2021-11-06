import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Advertisement from "./pages/Advertisement";
import CreateAdvertisement from "./pages/CreateAdvertisemet";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Notification from "./pages/Notification";
import MainHeader from "./components/MainHeader";
import { useState, useEffect } from "react/cjs/react.development";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  const setLoggedInState = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedIn)
  }
  useEffect(() => {
    setLoggedInState()
  }, []);
  return (
    <div>
      <MainHeader isLoggedIn={isLoggedIn} setLoggedInState={setLoggedInState} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <Login setLoggedInState={setLoggedInState} />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/new-Blog">
          <CreateBlog />
        </Route>
        <Route path="/new-ad">
          <CreateAdvertisement />
        </Route>
        <Route path="/advertisement">
          <Advertisement />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/notification">
          <Notification />
        </Route>
        <Route path="*">not found</Route>
      </Switch>
    </div>
  );
};

export default App;
