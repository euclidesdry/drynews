import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { SigInButton } from "../SignInButton/SigInButton";
import Image from "next/image";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="DRY.news Logo"
          width={120}
          height={27}
        />

        <nav>
          <a className={styles.active} href="#">
            Home
          </a>
          <a href="#">Articles</a>
        </nav>

        <SigInButton />
      </div>
    </header>
  );
}
