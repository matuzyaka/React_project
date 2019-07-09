import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = props => {
  return (
    <BrowserRouter>
      <div className={"AppWrapper"}>
        <Header />
        <Nav />
        <div className={"AppWrapperContent"}>
          <Route
            path={"/profile"}
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route
            path={"/dialogs"}
            render={() => (
              <Dialogs
                state={props.state.messagesPage}
              />
            )}
          />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/settings"} render={() => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
