import React from "react";
import styles from "../../styles/LikesPage.module.css";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import ArtistCard from "../../components/ArtistCard";
function index() {
  return (
    <div className={styles.likesPage}>
      <Sidebar />
      <div className={styles.likePage__container}>
        <Nav />
        <h2 className={styles.likePage__title}>Liked Songs</h2>
        <div className={styles.likePage__songsContainer}>
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
