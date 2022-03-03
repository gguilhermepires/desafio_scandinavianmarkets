import React, {  useEffect } from "react";
import useWebSocket from 'react-use-websocket';
import { useState } from 'react';

function App() {
const [numero,setNumero] = useState(0);
  const { lastJsonMessage, sendMessage } = useWebSocket('ws://localhost:8080', {
 protocols: 'echo-protocol',
  onOpen: () => console.log(`Connected to App WS`),
    onMessage: (a) => {
      console.log(a.data);
      if (lastJsonMessage) {
        console.log(lastJsonMessage);
        setNumero(lastJsonMessage.n);
      }
    },
    onError: (event) => { console.error(event); },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });
  return (
    <div className="App">
    <header className="App-header">
      {numero}
    </header>
  </div>
  );
}

export default App;