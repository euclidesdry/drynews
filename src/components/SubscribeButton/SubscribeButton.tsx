import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";
import { ProductProps } from "../../pages";

interface SubscribeButtonProps {
  priceId: ProductProps["priceId"];
}

export function SubscribeButton({}: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe right now
    </button>
  );
}
