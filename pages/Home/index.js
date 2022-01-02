import React from "react";
import styles from "../../styles/HomePage.module.css";
import Nav from "../../components/Nav";
import SongCard from "../../components/SongCard";
import Sidebar from "../../components/Sidebar";
import MusicController from "../../components/MusicController";
import { useSelector } from "react-redux";
import { selectcurrentSong } from '../../redux/currentSongSlice'
function index({ data }) {
  const currentSong = useSelector(selectcurrentSong)

  return (
    <div className={styles.homePage}>
      <Sidebar />
      <div className={styles.homePage__container}>
        <Nav user={data} />
        <div className={styles.homePage__headerContainer}>
          <img
            className={styles.homePage__img}
            src={currentSong.cover}
            alt="song cover"
          />
          <h1 className={styles.homePage__title}>{currentSong.song}</h1>
        </div>
        <div className={styles.homePage__songsContainer}>
          {/* {data.map((data) => (
            <SongCard song={data} key={data.id} />
          ))} */}
        </div>
      </div>
      <MusicController />
    </div>
  );
}

export default index;

/// fetch data
export async function getStaticProps(context) {
  const res = await fetch('https://music-lab-app.vercel.app/api/hello')
  const data = await res.json()
  return {
    props: { data },
  }
}