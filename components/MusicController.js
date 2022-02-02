import React, { useRef } from "react";
import styles from "../styles/MusicController.module.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { useSelector } from "react-redux";
import { selectcurrentSong } from '../redux/currentSongSlice'
import { useState } from "react";
function MusicController() {
  const currentSong = useSelector(selectcurrentSong)
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(true)

  // Play and Pause
  const handleOnPlay = () => {
    const preValue = isPlaying
    setIsPlaying(!preValue)

    if (isPlaying) {
      audioRef.current.play()

    } else {
      audioRef.current.pause()
    }
  }
  const handleOnChange = () => {

  }

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

          {isPlaying ?
            <PlayCircleFilledIcon
              fontSize="large"
              className={styles.musicController__icon}
              onClick={handleOnPlay} />
            :
            <PauseCircleFilledIcon
              fontSize="large"
              onClick={handleOnPlay}
              className={styles.musicController__icon} />}

          <SkipNextIcon className={styles.musicController__icon} />
        </div>
        <audio src={currentSong.audio} ref={audioRef} />
        <div className={styles.musicController__controller}>
          <p className={styles.musicController__time}>2:00</p>
          <input
            className={styles.musicController__input}
            min={0}
            max={100}
            value={50}
            onChange={handleOnChange}
            type="range"
          />
          <p className={styles.musicController__time}>2:00</p>
        </div>
      </div>
      <div className={styles.musicController__infoRightContainer}>
        {false ? (
          <VolumeUpIcon fontSize="small" className={styles.musicController__icon} />
        ) : (
            <VolumeOffIcon fontSize="small" className={styles.musicController__icon} />
          )}
        {/* <input className={styles.musicController__inputVolume} min={0} max={100} value={50}  type="range" /> */}
      </div>
    </div>
  );
}

export default MusicController;
