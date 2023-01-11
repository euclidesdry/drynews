import styles from "./styles.module.scss";
import { SigInButton } from "../SignInButton/SigInButton";
import Image from "next/image";
import { ActiveLink } from "../ActiveLink";

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
                    <ActiveLink href="/" activeClassName={styles.active}>
                        Home
                    </ActiveLink>
                    <ActiveLink
                        href="/posts"
                        prefetch
                        activeClassName={styles.active}
                    >
                        Articles
                    </ActiveLink>
                </nav>

                <SigInButton />
            </div>
        </header>
    );
}
