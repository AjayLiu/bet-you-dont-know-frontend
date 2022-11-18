import styles from "./ChatBox.module.scss";
import SocketContext from "@context/SocketContext";
import { ChatMessage, User } from "@shared/types";
import dayjs from "dayjs";
import React, { useState, useContext, useEffect, useRef } from "react";

interface Props {
  sender: User;
  lobbyID: string;
  chatList: Array<ChatMessage>;
}

const ChatBox: React.FC<Props> = (props) => {
  const socket = useContext(SocketContext);

  const [messageText, setMessageText] = useState("");

  const slowmodeDuration = 0.5;
  const [timeOfLastMessage, setTimeOfLastMessage] = useState(Date.now());

  const sendMessage = () => {
    // check if the message is empty
    if (messageText.trim() != "") {
      // prevent spamming with slowmode
      const secondsSinceLastMessage = (Date.now() - timeOfLastMessage) / 1000;
      if (secondsSinceLastMessage >= slowmodeDuration) {
        setTimeOfLastMessage(Date.now());
        socket.emit("sendMessage", props.lobbyID, messageText, props.sender);
        setMessageText("");
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const [timeOfJoin, setTimeOfJoin] = useState(dayjs());
  useEffect(() => {
    setTimeOfJoin(timeOfJoin);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.chatLabel}>Chat</div>
      <div className={styles.messagesContainer}>
        <div className={styles.messagesWrapper}>
          {props.chatList.map((msg, idx) => {
            // first check if the message is sent after the user joined (prevent them from seeing past messages)
            // users can see past 10 seconds of messages
            if (
              dayjs(msg.timestamp).isAfter(timeOfJoin.subtract(10, "seconds"))
            ) {
              const oddEvenStyle =
                idx % 2 == 0 ? styles.oddLine : styles.evenLine;

              // server message
              if (msg.isServer) {
                return (
                  <div
                    key={idx}
                    className={`${styles.messageRow} ${styles.serverMessage} ${oddEvenStyle}`}
                  >
                    <div className={styles.messageContent}>{msg.message}</div>
                  </div>
                );
              }

              // user message
              return (
                <div
                  key={idx}
                  className={`${styles.messageRow} ${styles.userMessage} ${oddEvenStyle} `}
                >
                  <div className={styles.sender}>
                    {(msg.user.isLeader ? "[LEADER] " : "") +
                      msg.user.displayName +
                      ": "}
                  </div>
                  <div className={styles.messageContent}>{msg.message}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="chat"
          className={styles.chatInputBox}
          value={messageText}
          maxLength={100}
          placeholder={"Send Message"}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
    </div>
  );
};

export default ChatBox;
