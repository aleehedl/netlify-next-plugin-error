import Navigation from "@/components/navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navigation locale={pageProps.locale} />
      <Component {...pageProps} />
   </div>
  )
}
