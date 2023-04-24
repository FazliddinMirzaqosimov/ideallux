import '@/styles/globals.css'
import '@/modules/Home/home-banner.scss'
import Layout from "@/layout/layout";
import "swiper/css";
import "swiper/css/pagination";
import 'react-loading-skeleton/dist/skeleton.css'
import '../localization/i18n'
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import {store} from "@/store";
import NextNProgress from 'nextjs-progressbar'


const queryClient = new QueryClient()
export default function App({Component, pageProps}) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                <Layout>
                    <NextNProgress/>
                    <Component {...pageProps} />
                </Layout>
                </Provider>
            </QueryClientProvider>
        </>
    )
}
