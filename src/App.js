import React from "react";
import Chatbot from "react-chatbot-kit";

import './App.css'

import ActionProvider from './ActionProvider'
import config from './config'
import MessageParser from './MessageParser'
//imports are provided above this line.

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
