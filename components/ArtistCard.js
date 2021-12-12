import React from "react";
import styles from "../styles/ArtistCard.module.css";
function ArtistCard({name}) {
  return (
    <div className={styles.artistCard}>
      <img
        className={`${styles.artistCard__img} ${styles[name]} `}
        src="https://cdn.vox-cdn.com/thumbor/b3sUwdyAUyusFlcsQWWzD1c9GaI=/0x112:493x441/1400x1400/filters:focal(0x112:493x441):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49601353/Screen_Shot_2016-05-01_at_12.14.34_PM.0.0.png"
        alt=""
      />
      <h5 className={styles.artistCard__name}>Chance The Rapper</h5>
      <p  className={styles.artistCard__song}>Coloring Book</p>
    </div>
  );
}

export default ArtistCard;
