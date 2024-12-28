import styles from "./page.module.css";
import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Header />
      <Ad /> */}
      <Calculator />
    </div>
  );
}
