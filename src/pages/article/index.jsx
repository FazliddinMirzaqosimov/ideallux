import Articles from "@/modules/Articles/Articles";
import Head from "next/head";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Ideallux</title>
                <meta name="description" content="Ideallux maqolalari" />
                <link rel="icon" href="/logo-icon.png" />
            </Head>
        <Articles/>
        </div>
    );
};

export default Index;