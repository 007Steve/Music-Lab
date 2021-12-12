import React from "react";
import styles from "../styles/SongCard.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useState } from "react";
function SongCard() {
  const [liked, setLiked] = useState(true);
  const likeSong = () => {
    setLiked(!liked);
  };
  return (
    <div className={styles.songCard}>
      <div className={styles.songCard__imgContainer}>
        <img
          className={styles.songCard__img}
          src="https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/4:3/w_960,h_720,c_limit/Artist-Designed%20Album%20Covers%202.jpg"
          alt=""
        />
        <ArrowRightIcon />
        <h5>Ttile</h5>
      </div>
      {liked ? (
        <FavoriteIcon
          fontSize="small"
          className={liked ? styles.songCard__iconHeart : styles.Liked}
          onClick={likeSong}
        />
      ) : (
        <FavoriteIcon
          fontSize="small"
          className={styles.Liked}
          onClick={likeSong}
        />
      )}
    </div>
  );
}

export default SongCard;
