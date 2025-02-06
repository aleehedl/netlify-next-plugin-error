export default function Custom500() {
  return <h1>Oh no! | Voi ei!</h1>
}

export async function getStaticProps({ locale }) {
  return {
      props: {
         locale,
      },
  };
}