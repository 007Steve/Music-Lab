import React from "react";
import styles from "../../styles/Artist.module.css";
import Nav from "../../components/Nav";
import ArtistCard from "../../components/ArtistCard";
import Sidebar from "../../components/Sidebar";
function index() {
  return (
    <div className={styles.artist}>
      <Sidebar />
      <div>
        <Nav />
        <h2 className={styles.artist__title}>Artist</h2>
        <div className={styles.artist__container}>
          <ArtistCard name="artist" />
          <ArtistCard name="artist" />
          <ArtistCard name="artist" />
          <ArtistCard name="artist" />
          <ArtistCard name="artist" />
          <ArtistCard name="artist" />
          <ArtistCard name="artist" />
          <ArtistCard name="artist" />
        </div>
      </div>
    </div>
  );
}

export default index;
