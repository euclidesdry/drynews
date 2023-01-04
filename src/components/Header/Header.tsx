import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { SigInButton } from "../SignInButton/SigInButton";

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

        <SigInButton />
      </div>
    </header>
  );
}
