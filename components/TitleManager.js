import Head from "next/head";

const siteTitle = "오늘의축제";

export default function TitleManager(props) {
  return (
    <Head>
      <title>{props.pageTitle + "-" + siteTitle}</title>
      <meta name="description" content={props.pageDescrption} />
    </Head>
  );
}
