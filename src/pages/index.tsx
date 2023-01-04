import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | DRY.news</title>
      </Head>
      <h1 className={styles.title}>DRY Products</h1>
    </>
  );
}
