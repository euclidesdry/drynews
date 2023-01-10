import { useSession, signIn } from "next-auth/react";

import styles from "./styles.module.scss";
import { ProductProps } from "../../pages";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

interface SubscribeButtonProps {
    priceId: ProductProps["priceId"];
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data, status } = useSession();

    async function handleSubscribe() {
        if (status === "unauthenticated") {
            signIn("github");
            return;
        }

        try {
            const response = await api.post("/subscribe");

            const { sessionId } = response.data;

            const stripe = await getStripeJs();

            await stripe?.redirectToCheckout({ sessionId });
        } catch (err) {
            const error = err as Error;
            alert(error.message);
        }
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
