import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { addPost, updateNewPostText } from "./redux/state";

const App = props => {
  return (
    <div className={"AppWrapper"}>
      <Header />
      <Nav />
      <div className={"AppWrapperContent"}>
        <Route
          path={"/profile"}
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={addPost}
              updateNewPostText={updateNewPostText}
            />
          )}
        />
        <Route
          path={"/dialogs"}
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        <Route path={"/news"} render={() => <News />} />
        <Route path={"/music"} render={() => <Music />} />
        <Route path={"/settings"} render={() => <Settings />} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
