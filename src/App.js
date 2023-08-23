import React from "react";
import "./App.css";
import Main from "./components/chatbox/Main";
import stars from "./nebula.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/auth/SignIn";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: "url(" + stars + ")",
        backgroundSize: "cover",
      }}
    >
      <Router>
        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/chats" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
