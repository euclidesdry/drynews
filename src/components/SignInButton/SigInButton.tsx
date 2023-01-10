import { FaGithub, FaSignOutAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { getProviders, signOut, signIn, useSession } from "next-auth/react";

import styles from "./styles.module.scss";
import { NextPageContext } from "next";

interface SigInButtonProps {}

export function SigInButton({}: SigInButtonProps) {
    const { data, status } = useSession();

    console.log("Session:status:", status, data);

    return status === "authenticated" ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#2a40c0" />
            {data.user?.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn("github")}
        >
            <FaGithub color="#eba417" /> Sign In with Github
        </button>
    );
}

export async function getServerSideProps(context: NextPageContext) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
