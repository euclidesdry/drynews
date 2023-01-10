import { useSession, signIn } from "next-auth/react";

import styles from "./styles.module.scss";
import { ProductProps } from "../../pages";

interface SubscribeButtonProps {
    priceId: ProductProps["priceId"];
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data, status } = useSession();

    function handleSubscribe() {
        if (status === "unauthenticated") {
            signIn("github");
            return;
        }

        // criação da checkout session
    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe right now
        </button>
    );
}
