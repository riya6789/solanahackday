import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameDiv}>
      <img className={styles.vectorIcon} alt="" src="../vector16.svg" />
      <div className={styles.wereHereForACause}>We’re here for a cause</div>
    </div>
  );
};

export default FrameComponent1;
