import Articles from "@/modules/Articles/Articles";
import Head from "next/head";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Ideallux</title>
                <meta name="description" content="Ideallux maqolalari" />
            </Head>
        <Articles/>
        </div>
    );
};

export default Index;