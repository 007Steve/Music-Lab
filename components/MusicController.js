import React from "react";
import styles from "../styles/MusicController.module.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
function MusicController() {
  return (
    <div className={styles.musicController}>
      <div className={styles.musicController__infoLeftContainer}>
        <img
          className={styles.musicController__img}
          src="https://cdn.vox-cdn.com/thumbor/b3sUwdyAUyusFlcsQWWzD1c9GaI=/0x112:493x441/1400x1400/filters:focal(0x112:493x441):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49601353/Screen_Shot_2016-05-01_at_12.14.34_PM.0.0.png"
          alt=""
        />
        <div>
          <h5>Title</h5>
          <h6 className={styles.musicController__artist}>Artist</h6>
        </div>
      </div>
      <div className={styles.musicController__infoCenterContainer}>
        <div className={styles.musicController__iconContainer}>
          <SkipPreviousIcon className={styles.musicController__icon} />
          <PlayCircleFilledIcon
            fontSize="large"
            className={styles.musicController__icon}
          />
          <SkipNextIcon className={styles.musicController__icon} />
        </div>

        <div>
          <input
            className={styles.musicController__input}
            min={0}
            max={100}
            value={50}
            type="range"
          />
        </div>
      </div>
      <div className={styles.musicController__infoRightContainer}>
        {false ? (
          <VolumeUpIcon className={styles.musicController__icon} />
        ) : (
          <VolumeOffIcon className={styles.musicController__icon} />
        )}
        {/* <input className={styles.musicController__inputVolume} min={0} max={100} value={50}  type="range" /> */}
      </div>
    </div>
  );
}

export default MusicController;
