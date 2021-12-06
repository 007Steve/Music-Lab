import React from "react";
import styles from "../../styles/HomePage.module.css";
import Nav from "../../components/Nav";
import SongCard from "../../components/SongCard";
import Sidebar from "../../components/Sidebar";
import MusicController from "../../components/MusicController";
function index() {
  return (
    <div className={styles.homePage}>
      <Sidebar />
      <div className={styles.homePage__container}>
        <Nav />
        <div className={styles.homePage__headerContainer}>
          <img
            className={styles.homePage__img}
            src="https://cdn.vox-cdn.com/thumbor/b3sUwdyAUyusFlcsQWWzD1c9GaI=/0x112:493x441/1400x1400/filters:focal(0x112:493x441):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49601353/Screen_Shot_2016-05-01_at_12.14.34_PM.0.0.png"
            alt=""
          />
          <h1 className={styles.homePage__title}>Title</h1>
        </div>
        <div className={styles.homePage__songsContainer}>
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
      <MusicController />
    </div>
  );
}

export default index;
