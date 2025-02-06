import Head from "next/head";

const content = {
    en: "This is the second page",
    fi: "Tämä on toinen sivu",
}

export default function Home({ locale }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          {content[locale]}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
      props: {
        locale,
      },
  };
}