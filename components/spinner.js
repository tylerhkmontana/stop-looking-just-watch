import styles from './styles/spinner.module.scss';

export default function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div id="spinner" className={styles.item}></div>
        <div id="spinner" className={styles.item}></div>
        <div id="spinner" className={styles.item}></div>
        <div id="spinner" className={styles.item}></div>
        <div id="spinner" className={styles.item}></div>
        <div id="spinner" className={styles.item}></div>
        <div id="spinner" className={styles.item}></div>
        <div id="spinner" className={styles.item}></div>
      </div>
    </div>
  );
}
