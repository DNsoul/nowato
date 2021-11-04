import React from "react";
import styles from "./Player.module.css";

type propsType = {
  url: string;
}

const Player = (props : propsType): JSX.Element => {
  const {
    url,
  } = props;

  return (
    <iframe
      key="videoFrame"
      id="videoFrame"
      title="videoFrame"
      src={url}
      frameBorder="0"
      allowFullScreen
      referrerPolicy="origin"
      className={styles.player}
    ></iframe>
  );
};

export default Player;
