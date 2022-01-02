import React from "react";
import styles from "../styles/ArtistCard.module.css";
function ArtistCard({ song,type}) {

  return (
    <div className={styles.artistCard}>
      <img
        className={`${styles.artistCard__img} ${styles[type]} `}
        src={song.cover}
        alt="song cover"
      />
      <h5 className={styles.artistCard__name}>{song.artist}</h5>
      <p className={styles.artistCard__song}>{song.song}</p>
    </div>
  );
}

export default ArtistCard;
