import Head from "next/head";
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | DRY news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {[1, 1, 1, 1].map((post, index) => (
                        <a href="#" key={index}>
                            <time>12 de março de 2021</time>
                            <strong>
                                Creating a Monorepo with Lerna & Yarn Workspaces
                            </strong>
                            <p>
                                In this guide, you will learn how to create a
                                Monorepo to manage multiple packages with a
                                shared button
                            </p>
                        </a>
                    ))}
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
    const response = await prismic;

    console.log("»» Response: " + JSON.stringify(response, null, 2));

    return {
        props: {},
    };
};
