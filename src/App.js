import './App.css';
import Chat from './Chat';
import { useState } from "react";
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user }, dispatch] = useStateValue()

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (<Login/>) : (
        <div className="app__body">
          <Router>
            {/* SIDEBAR */}
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                {/* CHAT */}
                <Chat />
              </Route>
              <Route path="/">
                {/* CHAT */}
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>

  );
}

export default App;
