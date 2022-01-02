import React from "react";
import styles from "../../styles/Album.module.css";
import Nav from "../../components/Nav";
import ArtistCard from "../../components/ArtistCard";
import Sidebar from "../../components/Sidebar";
function index({ data }) {
  return (
    <div className={styles.album}>
      <Sidebar />
      <div>
        <Nav />
        <h2 className={styles.album__title}>Album</h2>
        <div className={styles.album__container}>
          {data.map((data) => (
            <ArtistCard song={data} type="album" />
          ))}
        </div>
      </div>
    </div>
  );
}
export default index;

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3001/api/hello')
  const data = await res.json()
  return {
    props: { data },
  }
}