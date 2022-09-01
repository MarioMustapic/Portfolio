import "./ChatPage.styles.scss";

import { Message as MessageModel } from "../../models/Message";
import { useUser } from "../../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { ChatPage as Component } from "./ChatPage.component";

export function ChatPage() {
  const { user } = useUser();
  const [state, setState] = useState([]);
  const [drone, setDrone] = useState(null);
  const [error, setError] = useState(null);
  const [joinedRoom, setJoinedRoom] = useState(false);
 // const [typingMessage, setTypingMessage] = useState(false);

  const sendMessage = (formState) => {
    const message = new MessageModel({
      messageText: formState.message,
      user,
    });

    if (drone !== null) {
      drone.publish({
        room: 'chat',
        message: message
      });
    }
  }

<p className="about__p">
    Since I was a kid, I always loved computers and playing on them while dreaming about maybe, someday, <br />
    i actually also work on them. At the start of this year I finally decided to change my professional <br />
    career, and try coding for real, namely as frontend developer. I finished a 3 months course for HTM <br />
    CSS and React and I am currently searching for a job, while also upgrading mine skills and knowledge <br />
    in the field of web development, with a smidge of design in it.
</p>

  useEffect(() => {
    if (drone !== null) return;
    setDrone(new window.Scaledrone('cHqVroSxXO9VWIAp'));
  }, [drone, setDrone]);

  useEffect(() => {
    if (drone === null) return;

    const room = drone.subscribe('chat');

    room.on('open', error => {
      if (error) {
        return setError(error);
      }
      setJoinedRoom(true);
    });
  
    room.on('message', message => {
      console.log('Message received', message);

      setState((state) => [
        ...state,
        MessageModel.fromObject({ ...message.data, id: message.id })
      ]);
    });
  }, [drone]);

  return (
    <Component
      messages={state}
      onSendMessage={sendMessage}
      error={error}
      joinedRoom={joinedRoom}
    />
  );
}