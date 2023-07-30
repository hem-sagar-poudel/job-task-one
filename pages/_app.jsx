import "@styles/import.scss";
import Head from "next/head";

//prime react
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// prime icons
import "primeicons/primeicons.css";

//toaster
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Bhawani Infosis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}