import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchToken, messaging } from './firebaseInit';
import { onMessage } from 'firebase/messaging';

function App() {

  const [token, setToken] = useState('')
  const [isNotificationEnable, setIsNotificationEnable] = useState(false)

  useEffect(() => {
     async function notification(){
        await fetchToken()
     }
     notification();
  }, [])

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // ...
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
      </header>
    </div>
  );
}

export default App;
