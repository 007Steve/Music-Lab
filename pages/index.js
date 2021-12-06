import Head from "next/head";
import styles from "../styles/Home.module.css";
import CheckIcon from "@material-ui/icons/Check";
import Link from "next/link";
import Logo from "../components/Logo";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Music Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles.r} onSubmit>
        <Logo />

        <div className={styles.signUp__inputContainer}>
          <input
            className={styles.signUp__input}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {/* <CheckIcon className={styles.signUp__inputIcon} /> */}
        </div>
        <div className={styles.signUp__inputContainer}>
          <input
            className={styles.signUp__input}
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {/* <CheckIcon className={styles.signUp__inputIcon} /> */}
        </div>
        <div className={styles.signUp__btnSignContainer}>
          <p className={styles.signUp__btn}>Login</p>
          <Link href="/Home">
            <button className={styles.signUp__btn}>Sign Up</button>
          </Link>
        </div>
        <Link href="/Home">
          <button className={styles.demo__btn}>Demo</button>
        </Link>
      </form>
    </div>
  );
}
