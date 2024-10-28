import { io } from "socket.io-client";
const URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5050/";

export const socket = io(URL, {
  autoConnect: false,
});
