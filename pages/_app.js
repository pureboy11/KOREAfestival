import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4736976342884472291e70b07a0248dd&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
