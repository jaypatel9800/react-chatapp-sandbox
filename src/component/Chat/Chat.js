import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../infobar/infoBar";
import Input from "../mainInput/Input";
import Massages from "../Massages/Massages";
import { useHistory } from "react-router-dom";
// import UserNames from "../userNames/UserNames";
import "./chat.css";

let socket;

const Chat = ({ location }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  // const [users, setUsers] = useState('');
  const [massage, setMassage] = useState("");
  const [massages, setMassages] = useState([]);
  const ENDPOINT = "https://react-chatting--app.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert("Please join with unique user name");
        history.replace("/");
      }
    });
    return () => {
      socket.emit("left");
      socket.off();
    };
  }, [ENDPOINT, location.search, history]);

  useEffect(() => {
    socket.on("massage", (massage) => {
      setMassages([...massages, massage]);
    });
    // socket.on('roomData', ({users}) => {
    //   setUsers(users);
    //   console.log(users);
    // })
  }, [massages]);

  const sendMassage = (event) => {
    event.preventDefault();

    if (massage) {
      socket.emit("sendMassage", massage, () => setMassage(""));
    }
  };
  return (
    <div className="chat__top">
      <div className="chat__main">
        <InfoBar room={room} />
        <Massages massages={massages} name={name} />
        {/* <UserNames users={users}/> */}
      </div>
      <Input
        massage={massage}
        setMassage={setMassage}
        sendMassage={sendMassage}
      />
    </div>
  );
};

export default Chat;
