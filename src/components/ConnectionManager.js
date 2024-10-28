import React from "react";
import { socket } from "../socket";

export function ConnectionManager() {
  function connect() {
    console.log("socket connect click", socket);
    try{
      socket.connect();
    }catch(err){
      console.error("Socket Connection Err:-", err)
    }
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  );
}
