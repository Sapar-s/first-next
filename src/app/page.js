import styles from "./page.module.css";
import Header from "@/components/Header";
import { Ad } from "@/components/Ad";
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
