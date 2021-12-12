import React from "react";
import styles from "../styles/Sidebar.module.css";
import SidebarCards from "./SidebarCards";
import Link from "next/link";
import Logo from "../components/Logo";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@mui/icons-material/Person';
import AlbumIcon from '@mui/icons-material/Album';
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__logo}>
          <Logo />
        </div>
      </div>

      <h4 className={styles.sidebar__myMuisc}>Menu</h4>
     
        <div className={styles.sidebar__sidebarCards}>
        
        <HomeIcon fontSize="small" className={styles.sidebar__icon} />
        <Link href="/Home">
        <h5 className={styles.sidebar__texts}>Home</h5>
        </Link>
      </div>
     
       <div className={styles.sidebar__sidebarCards}>
        <PersonIcon fontSize="small" className={styles.sidebar__icon} />
        
        <Link href="/Artist">
        <h5 className={styles.sidebar__texts}>Artist</h5>
                </Link>
      </div>
       <div className={styles.sidebar__sidebarCards}>
        <AlbumIcon fontSize="small" className={styles.sidebar__icon} />
        <Link href="/Album">
        <h5 className={styles.sidebar__texts}>Album</h5>
                </Link>
      </div>
    
      <h4 className={styles.sidebar__myMuisc}>Playlist</h4>
        <div className={styles.sidebar__sidebarCards}>
        <FavoriteIcon fontSize="small" className={styles.sidebar__icon} />
        <Link href="/likes">
        <h5 className={styles.sidebar__texts}>Liked Songs</h5>
                </Link>
      </div>
      
      <h4 className={styles.sidebar__myMuisc}>Settings </h4>
       <div className={styles.sidebar__sidebarCards}>
        <SettingsIcon fontSize="small" className={styles.sidebar__icon} />
        <Link href="/Home">
        <h5 className={styles.sidebar__texts}>Settings</h5>
                </Link>
      </div>
      <div className={styles.sidebar__sidebarCards}>
        <LogoutIcon fontSize="small" className={styles.sidebar__icon} />
        <Link href="/">
        <h5 className={styles.sidebar__texts}>Logout</h5>
                </Link>
      </div>
     
    </div>
  );
}

export default Sidebar;
