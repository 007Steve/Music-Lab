import React from "react";
import styles from "../styles/Sidebar.module.css";
import SidebarCards from "./SidebarCards";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <img className={styles.sidebar__logo} src="/logo.png" alt="" />
      </div>
      <h4 className={styles.sidebar__myMuisc}>Menu</h4>
      <SidebarCards texts="Home" />
      <SidebarCards texts="Artist" />
      <SidebarCards texts="Album" />
      <h4 className={styles.sidebar__myMuisc}>Playlist</h4>
      <SidebarCards texts="Add Playlist" />
      <h4 className={styles.sidebar__myMuisc}>Settings </h4>
      <SidebarCards texts="Settings" />
      <SidebarCards texts="Log Out" />
    </div>
  );
}

export default Sidebar;
