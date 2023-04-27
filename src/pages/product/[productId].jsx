import React from 'react';
import ProductDetailed from "@/modules/Product/product-detailed";
import Head from "next/head";

const ProductById = () => {
    return (
        <div>
            <Head>
                <title>Ideallux</title>
                <meta name="description" content="Ideallux mahsuloti" />
                <link rel="icon" href="/logo-icon.png" />
            </Head>
            <ProductDetailed/>
        </div>
    );
};

    export default ProductById;