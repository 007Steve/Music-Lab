import React from "react";
import styles from "../styles/SongCard.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from '../redux/currentSongSlice'
function SongCard({ song }) {

  // Liked toogle state
  const [liked, setLiked] = useState(true);
  const likeSong = () => {
    setLiked(!liked);
  };

  // Set current song
  const dispatch = useDispatch()
  const setActiveSong = () => {
    dispatch(setCurrentSong( song ))
  }

  return (
    <div className={styles.songCard} onClick={setActiveSong}>
      <div className={styles.songCard__imgContainer}>
        <img
          className={styles.songCard__img}
          src={song.cover}
          alt=""
        />
        <ArrowRightIcon />
        <h5>{song.song}</h5>
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
