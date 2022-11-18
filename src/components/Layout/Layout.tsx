import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import SocketContext from "@context/SocketContext";
import styles from "./Layout.module.scss";

interface Props {
  title: string;
  openGraphTitle?: string;
  alertLeave?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const socket = useContext(SocketContext);
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    if (socket.active) {
      setIsConnected(true);
    }
    socket.on("connect", () => {
      setIsConnected(true);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Bet You Don't Know</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="a simple multiplayer game of wits, deception, and bets!
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bet You Don't Know" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="a simple multiplayer game of wits, deception, and bets!"
        />
        <meta
          property="og:image"
          content="https://bet-you-dont-know.herokuapp.com/img/bet-you-dont-know-logo.png"
        />

        <meta name="twitter:title" content="Bet You Don't Know" />
        <meta
          name="twitter:description"
          content="a simple multiplayer game of wits, deception, and bets!"
        />
        <meta
          name="twitter:image"
          content="https://bet-you-dont-know.herokuapp.com/img/bet-you-dont-know-logo.png"
        />
      </Head>
      <main className={styles.main}>
        <Header headerText="Bet You Don't Know" alertLeave={props.alertLeave} />
        {isConnected ? props.children : "Loading..."}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
