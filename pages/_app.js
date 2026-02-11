import "@/styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { Layout } from "@/components";
import { AuthProvider } from "@/context/AuthContext";
import { bricolageGrotesque } from "@/lib/fonts";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      offset: 100,
      duration: 1500,
      once: true,
      // mirror: false,
    });
  }, []);
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <AuthProvider>
      <div className={`${bricolageGrotesque.className} font-app-root`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </AuthProvider>
  );
}
