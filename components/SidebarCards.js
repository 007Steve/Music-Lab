import React from "react";
import styles from "../styles/SidebarCards.module.css";
import HomeIcon from "@material-ui/icons/Home";
import Link from "next/link";
function SidebarCards({ texts }) {
  return (
    <Link href={`/${texts}`}>
      <div className={styles.sidebarCards}>
        <HomeIcon fontSize="small" className={styles.sidebarCards__icon} />
        <h5 className={styles.sidebarCards__texts}>{texts}</h5>
      </div>
    </Link>
  );
}

export default SidebarCards;
