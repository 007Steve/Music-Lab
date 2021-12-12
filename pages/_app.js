import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
  
      <Component {...pageProps} />
      // </Layout>
  );
}

export default MyApp;
