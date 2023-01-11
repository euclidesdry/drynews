import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

type PostsType = {
    slug: string | null;
    title: string;
    excerpt: string;
    updatedAt: string;
};
interface PostsProps {
    posts: PostsType[];
}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Posts | DRY news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map((post, index) => (
                        <a href="#" key={post.slug}>
                            <time>{post.updatedAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.excerpt}</p>
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

    console.log("--> : response[0].data.title: ", response[0].data.title);

    const posts = response.map((post) => {
        const paragraphs = post.data.content.find(
            (content: { type: string }) => content.type === "paragraph"
        )?.text;
        const content = paragraphs.substring(0, paragraphs?.indexOf(".") + 1);

        return {
            slug: post.uid,
            title: post.data.title,
            excerpt: content ?? "",
            updatedAt: new Date(post.last_publication_date).toLocaleDateString(
                "pt-BR",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }
            ),
        };
    });

    return {
        props: {
            posts,
        },
    };
};
