import React, { useEffect } from "react";
import styles from "../../styles/HomePage.module.css";
import Nav from "../../components/Nav";
import SongCard from "../../components/SongCard";
import Sidebar from "../../components/Sidebar";
import MusicController from "../../components/MusicController";
import { useDispatch } from 'react-redux'
import { songs } from '../../redux/songsSlice'
function index({ data }) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(songs(data))
  }, [])
  return (
    <div className={styles.homePage}>
      <Sidebar />
      <div className={styles.homePage__container}>
        <Nav user={data} />
        <div className={styles.homePage__headerContainer}>
          <img
            className={styles.homePage__img}
            src={data[0].cover}
            alt=""
          />
          <h1 className={styles.homePage__title}>{data[0].song}</h1>
        </div>
        <div className={styles.homePage__songsContainer}>


          {data.map((data) => (
            <SongCard title={data.song} img={data.cover} />
          ))}

        </div>
      </div>
      <MusicController />
    </div>
  );
}

export default index;

/// fetch data
export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3001/api/hello')
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}