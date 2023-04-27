import React from 'react';
import ArticleDetailed from "@/modules/Articles/article-detailed";
import Head from "next/head";

const ArticleById = () => {
    return (
        <div>
            <Head>
                <title>Ideallux</title>
                <meta name="description" content="Ideallux maqolalari" />
                <link rel="icon" href="/logo-icon.png" />
            </Head>
            <ArticleDetailed />
        </div>
    );
};

    export default ArticleById;