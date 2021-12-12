import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { Avatar } from "@material-ui/core";

function Nav() {
  
  return (
    <div className={styles.nav}>
      <div>
        <Link href="/Home">
          <button className={styles.nav__btn}> {"<"}</button>
        </Link>
        <Link href="/Artist">
          <button className={styles.nav__btn}> {">"}</button>
        </Link>
      </div>
            <Link href="/">
      <div className={styles.nav__container}>
        <div
          className={styles.nav__userContainer}
         
        >
          <h4 className={styles.nav__username}>Austin</h4>
          <Avatar
            src="/DSC_1020 (1).jpeg"
            fontSize
            className={styles.nav__photo}
          />
        </div>
    
      </div>
       </Link>
    </div>
  );
}

export default Nav;
