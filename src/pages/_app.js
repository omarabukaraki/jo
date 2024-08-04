import "@/styles/globals.css";
import NavBar from "../components/nav_bar_component/Nav_bar";

export default function App({ Component, pageProps }) {
  return <>  
  <NavBar/>
  <Component {...pageProps} /></>
  
  ;
}
