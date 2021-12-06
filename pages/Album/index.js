import React from "react";
import styles from "../../styles/Album.module.css";
import Nav from "../../components/Nav";
import ArtistCard from "../../components/ArtistCard";
import Sidebar from "../../components/Sidebar";
function index() {
  return (
    <div className={styles.album}>
      <Sidebar/>
      <div>
      <Nav />
      <h2 className={styles.album__title}>Album</h2>
      <div className={styles.album__container}>
        <ArtistCard name="album" />
        <ArtistCard name="album" />
        <ArtistCard name="album" />
        <ArtistCard name="album" />
        <ArtistCard name="album" />
        <ArtistCard name="album" />
        <ArtistCard name="album" />
        
      </div>
      </div>
    </div>
  );
}

export default index;
