import { ReactNode } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="DRY.news Logo" />

        <nav>
          <a className={styles.active} href="#">
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
      </div>
    </header>
  );
}
