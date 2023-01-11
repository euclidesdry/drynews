import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { SigInButton } from "../SignInButton/SigInButton";
import Image from "next/image";
import Link from "next/link";

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
                    <Link href="/" className={styles.active}>
                        Home
                    </Link>
                    <Link href="/posts" prefetch>
                        Articles
                    </Link>
                </nav>

                <SigInButton />
            </div>
        </header>
    );
}
