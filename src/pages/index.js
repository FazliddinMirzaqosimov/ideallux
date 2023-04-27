import Head from 'next/head'
import Home from "@/modules/Home/Home";
export default function Index() {
  return (
    <>
      <Head>
        <title>Ideallux </title>
        <meta name="description" content="Toshkentdagi Ideallux mahsulotlar katalogi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo-icon.png" />
      </Head>
     <Home/>
    </>
  )
}
