import React from "react";
import styles from "../../styles/Artist.module.css";
import Nav from "../../components/Nav";
import ArtistCard from "../../components/ArtistCard";
import Sidebar from "../../components/Sidebar";

function index({ data }) {
  return (
    <div className={styles.artist}>
      <Sidebar />
      <div>
        <Nav />
        <h2 className={styles.artist__title}>Artist</h2>
        <div className={styles.artist__container}>
          {/* {data.map((data) => (
            <ArtistCard song={data} type="artist" />
          ))} */}
        </div>
      </div>
    </div>
  );
}
export default index;

export async function getStaticProps(context) {
  const res = await fetch('https://music-lab-app.vercel.app/api/hello')
  const data = await res.json()
  return {
    props: { data },
  }
}