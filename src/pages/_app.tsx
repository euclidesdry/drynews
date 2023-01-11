import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";

import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <PrismicProvider
                internalLinkComponent={(props) => <Link {...props} />}
            >
                <PrismicPreview repositoryName={repositoryName}>
                    <Header />
                    <Component {...pageProps} />
                </PrismicPreview>
            </PrismicProvider>
        </SessionProvider>
    );
}
