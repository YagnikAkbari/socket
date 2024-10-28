import { useEffect, useState } from "react";
import "./App.css";
import { socket } from "./socket";
import { ConnectionState } from "./components/ConnectionState";
import { Events } from "./components/Events";
import { ConnectionManager } from "./components/ConnectionManager";
import { MyForm } from "./components/MyForm";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [fooEvents, setFooEvents] = useState([]);
  useEffect(() => {
    console.log("socket app", socket);

    function onFooEvent(value) {
      console.log("value from server", value);

      setFooEvents((prevState) => [...prevState, value]);
    }
    function onConnect() {
      console.log("socket connect", socket, socket.id);
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("send-foo", onFooEvent);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);
  return (
    <div>
      <h1>Socket</h1>
      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}

export default App;
