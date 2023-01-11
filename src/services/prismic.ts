import * as prismic from "@prismicio/client";
import fetch from "node-fetch";

const routes = [
    {
        type: "publication",
        path: "/:uid",
    },
    {
        type: "publication",
        path: "/posts",
    },
];

const repositoryName = "drynews";
const endpoint = prismic.getRepositoryEndpoint(repositoryName);
const client = prismic.createClient(endpoint, {
    routes,
    fetch,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export async function getPrismicClient(req?: unknown) {
    const pages = await client.getAllByType("publication", {
        fetch: ["publications.title", "publications.content"],
        pageSize: 100,
    });

    return pages;
}
