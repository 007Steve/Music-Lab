import React, { useEffect } from "react";
import styles from "../styles/LandingPage.module.css";
import Lottie from "react-lottie";
import animationData from "./Stephenplummer-2 (2).json";
function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.landingPage}>
      <Lottie options={defaultOptions}  />
    </div>
  );
}

export default LandingPage;