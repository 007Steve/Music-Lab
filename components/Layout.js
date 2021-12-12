import React from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.css";
import MusicController from "./MusicController";

function Layout({ children, show }) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.layoutContainer}>
          {true ? <Sidebar /> : <></>}

          <main>{children}</main>
        </div>
        {false ? <MusicController /> : <></>}
      </div>
    </>
  );
}

export default Layout;
