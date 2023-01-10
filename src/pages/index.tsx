import Head from "next/head";
import Image from "next/image";

import styles from "./home.module.scss";
import { SubscribeButton } from "../components/SubscribeButton";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";

export type ProductProps = {
    priceId: string;
    amount?: string | number;
};
interface HomeProps {
    product: ProductProps;
}

export default function Home({ product }: HomeProps) {
    return (
        <>
            <Head>
                <title>Home | DRY.news</title>
            </Head>

            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <span>✌️😎 Hi, welcome to DRY.news</span>
                    <h1>
                        We have here some news about <span>React.JS</span>{" "}
                        world.
                    </h1>
                    <p>
                        Get an earlier access to see all the Articles here{" "}
                        <br />
                        <span>
                            only for <span>{product?.amount}</span> a month
                        </span>
                    </p>

                    <SubscribeButton priceId={product.priceId} />
                </section>

                <Image
                    src="/images/avatar.svg"
                    alt="Girl coding"
                    width={356}
                    height={521}
                />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve(
        "price_1MMex7Bc9E8RtIbn3i2dyzcI",
        {
            expand: ["product"],
        }
    );
    const amount = price.unit_amount
        ? price.unit_amount / 100
        : price.unit_amount;

    const product = {
        priceId: price.id,
        amount: amount
            ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
              }).format(amount)
            : amount,
    };

    return {
        props: {
            product,
        },
        revalidate: 60 * 60 * 24, // 24 hours
    };
};

