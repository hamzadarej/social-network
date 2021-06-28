import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Cards from "./components/Cards";
import Messages from "./components/Messages";
import HeaderMenu from "./components/HeaderMenu";
import ButtonsSwipe from "./components/ButtonsSwipe";
import MessageContext from "./components/MessageContext";

//HEY GUYS BASIC STRUCTURE + COMPONENTS ARE DONE!!! I  INSTALLED SOME PACKAGES, FIND HERE THE LINKS + COMMANDS AND DON'T FORGET TO INSTALL THEM BEFORE YOU START WORKING
// FOR SWIPE https://www.npmjs.com/package/react-tinder-card
// npm install --save react-tinder-card --legacy-peer-deps
// FOR THE ICONS (THANKS HAMZA)
//            npm install react-icons --save
//  for the effect when we press the buttons, Get the core
//           npm install @material-ui/core
//and then
//           npm install @material-ui/icons
// AND OF COURSE THE ROUTER
//           npm install react-router-dom
//rfce

function App() {
  return (
    <div className="body-container">
      <Router>
        <Switch>
          <Route path="/hamzadarej/" exact>
            {/* the path should be "/" dont know why i had to put hamzadarei  to make it work...*/}
            <HeaderMenu />
            <Cards />
            <ButtonsSwipe />
          </Route>

          {/* the  : on the /:person means that any value goes there will be a valid url*/}
          <Route path="/messages/:person" exact>
            <HeaderMenu backButton="/hamzadarej/messages" /> <MessageContext />
            <Messages />
          </Route>
          <Route path="/messages">
            <HeaderMenu backButton="/hamzadarej/" />
            <Messages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
