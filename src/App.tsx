import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Aside />
      <main className="content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </main>
    </div >
  );
}
