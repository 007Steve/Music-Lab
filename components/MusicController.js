import React from "react";
import styles from "../styles/MusicController.module.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { useSelector } from "react-redux";
import { selectcurrentSong } from '../redux/currentSongSlice'
function MusicController() {
  const currentSong = useSelector(selectcurrentSong)
  return (
    <div className={styles.musicController}>
      <div className={styles.musicController__infoLeftContainer}>
        <img
          className={styles.musicController__img}
          src={currentSong.cover}
          alt=""
        />
        <div>
          <h5>{currentSong.song}</h5>
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

        <div className={styles.musicController__controller}>
          <p className={styles.musicController__time}>2:00</p>
          <input
            className={styles.musicController__input}
            min={0}
            max={100}
            value={50}
            type="range"
          />
          <p className={styles.musicController__time}>2:00</p>
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
