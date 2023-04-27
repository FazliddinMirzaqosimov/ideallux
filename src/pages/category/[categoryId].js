import Product from "@/modules/Product/Product";
import Head from "next/head";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Ideallux </title>
                <meta name="description" content="Ideallux mahsulotlar categoriya bo'yicha" />
            </Head>
            <Product/>
        </div>
    );
};
export default Index;