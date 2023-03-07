import "../styles/globals.css";
import type { AppProps } from "next/app";
import MetaTags from "@/components/Sections/MetaTags";

const metaData = {
    title: "Kenyan Environement Matters™",
    description: "Together, we stand for kenya's wildlife since 1933. Come join us!",
    url: "https://www.kev.pauldb09.dev",
    image: "https://www.kev.pauldb09.dev/public/kem.png",
    themeColor: "#D4B733",
    keywords: "key1, key2, key3, key4, key5, key6",
    author: "Pauldb09",
    charSet: "utf-8",
    language: "English",
    icons: [
        {
            src: "/images/kem.png",
            sizes: "32x32",
            type: "image/png",
        },
    ],
};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <MetaTags metaData={metaData} />
            <Component {...pageProps} />
        </>
    );
};

export default App;
