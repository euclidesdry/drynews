import Head from "next/head";
import Image from "next/image";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | DRY.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>✌️😎 Hi, welcome to DRY.news</span>
          <h1>
            We have here some news about the <span>React</span> world.
          </h1>
          <p>
            Get an earlier access to see all the Articles here <br />
            <span>
              only for <span>$1.90</span> a month
            </span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
