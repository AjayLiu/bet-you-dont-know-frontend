import type { AppProps } from "next/app";
import io from "socket.io-client";
import "@styles/globals.scss";
import SocketContext from "@context/SocketContext";
import GoogleAnalyticsHook from "@components/GoogleAnalyticsHook";
import { backendURL } from "@shared/globalVariables";
const SOCKET_URL =
  process.env.NODE_ENV === "production" ? backendURL : "http://localhost:5000";

const socket = io(SOCKET_URL);

function Application({ Component, pageProps }: AppProps) {
  return (
    <SocketContext.Provider value={socket}>
      <GoogleAnalyticsHook />
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}

export default Application;
