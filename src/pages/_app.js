import "@/styles/globals.css";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  const {lang} = useTranslation('common');

  return <div dir={`${lang === 'en' ? 'rtl' : 'ltr'}`}>  
  <Layout>
     <Component  {...pageProps} />
  </Layout>

  </div>
  
  ;
}
