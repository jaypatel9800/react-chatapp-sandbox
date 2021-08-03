import React from "react";
import { useHistory } from "react-router-dom";
import online from "../../icons/onlineIcon.png";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

import "./infobar.css";

const InfoBar = ({ room }) => {
  const history = useHistory();
  const closeChat = () => {
    history.replace("/");
  };
  return (
    <div className="infobar">
      <div>
        <img src={online} alt="online-icon" />
        <p>Online</p>
      </div>
      <h2>Room : {room}</h2>
      <div className="closeBtn" onClick={closeChat}>
        <HighlightOffRoundedIcon />
      </div>
    </div>
  );
};

export default InfoBar;
